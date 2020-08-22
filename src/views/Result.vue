<template lang="pug">
section.section
  .container
    h1.title.is-size-1 You should visit...
    .columns(v-if="result !== null")
      .column
        img.place(:src="result.image_url")
      .column.info
        .columns
          .column
            p.subtitle.name {{ result.name }}
            p.subtitle.price {{ result.price }}
            p.subtitle.rating {{ result.rating }} / 5
          .column.center
            a.button.is-medium.is-danger(:href="directions", target="_blank") Get Directions
            p.subtitle.distance {{ Math.round(result.distance / 100) * 100 / 1000 }} km from you
        hr
        .bottom
          .columns
            .column
              p.subtitle.type Type of food: 
                span {{ result.categories.map(it => it.title).join(",") }}
              p.subtitle.phone Phone: 
                span {{ result.display_phone }}
              p.subtitle.open Open until: 
                span N/A
              p.subtitle.takeout Takeout: 
                span Available
              p.subtitle.occasions Occasions: 
                span Date night, family dinner, special occasions
            .column.center
              button.button.is-medium.is-danger Check in
        hr
        .reroll
          button.button.is-danger.is-medium(@click="reroll") Re-roll
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import axios from "axios"

interface YelpResult {
  businesses: FoodResult[]
}

interface Category {
  alias: string
  title: string
}

interface Location {
  address1: string
  display_address: string[]
}

interface FoodResult {
  name: string
  image_url: string
  categories: Category[]
  coordinates: {
    latitude: number
    longitude: number
  }
  display_phone: string
  distance: number
  location: Location
  price: string
  rating: number
  review_count: number
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max))
}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a: Array<unknown>): Array<unknown> {
  var j, x, i
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  return a
}

@Component
export default class Result extends Vue {
  private coordinates!: Coordinates
  private distance!: number
  private selections!: string[]
  private occasion!: string
  private price!: number[]

  private results: FoodResult[] = []
  private result: FoodResult | null = null

  private mounted() {
    navigator.geolocation.getCurrentPosition(
      success => {
        this.coordinates = success.coords
        this.selections = JSON.parse(window.localStorage.getItem("selections") ?? "[]")
        this.occasion = window.localStorage.getItem("occasion") ?? ""
        this.price = JSON.parse(window.localStorage.getItem("price") ?? "[]")
        this.price.sort()
        this.distance = parseFloat(window.localStorage.getItem("distance") ?? "10")

        axios.get(this.makeURL()).then(s => {
          const results = s.data as YelpResult
          this.results = results.businesses
          shuffle(this.results)
          this.setRandomResult()
        })
      },
      err => {
        console.log(err)
      },
    )
  }

  private get directions(): string {
    if (this.result) {
      return `https://google.com/maps/place/${encodeURI(this.result.location.address1)}`
    }
    return ""
  }

  private setRandomResult() {
    const head = this.results.pop()
    if (head) {
      this.result = head
    } else {
      console.log("No more results!")
    }
  }

  private getCategories(): string {
    return this.selections.join(",")
  }

  private getRadius(): string {
    return (this.distance * 1000).toString()
  }

  private getPrice(): string {
    return this.price.map(num => num.toString()).join(",")
  }

  private makeURL(): string {
    return `https://harryhuang.api.stdlib.com/what-eat@dev/search/?term=food&categories=${this.getCategories()}&latitude=${
      this.coordinates.latitude
    }&longitude=${this.coordinates.longitude}&radius=${this.getRadius()}&price=${this.getPrice()}`
  }

  private reroll() {
    this.setRandomResult()
  }
}
</script>

<style lang="sass" scoped>
p.subtitle.name, .bottom p.subtitle
  font-weight: 600

.bottom span
  font-weight: 400

.info
  text-align: left

img.place
  object-fit: cover
  width: 500px
  height: 500px

hr
  background-color: #ff7c03

h1.title, .price, .rating
  color: #ff7c03

.column.center
  text-align: center

.reroll
  text-align: center
</style>
