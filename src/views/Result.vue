<template lang="pug">
section.section
  .container
    h1.title.is-size-1 You should visit...
    template(v-if="result !== null && !noMore")
      .columns
        .column
          img.place(:src="result.image_url")
        .column.info
          .columns
            .column
              p.subtitle.name {{ result.name }}
              p.subtitle.price {{ result.price }}
              p.subtitle.rating {{ result.rating }} / 5 ({{ result.review_count }} reviews)
            .column.center
              a.button.is-medium.is-danger(:href="directions", target="_blank") Get Directions
              p.subtitle.distance {{ Math.round(result.distance / 100) * 100 / 1000 }} km from you
          hr
          .bottom
            .columns
              .column
                p.subtitle.type Type of food: 
                  span {{ result.categories.map(it => it.title).join(", ") }}
                p.subtitle.phone Phone: 
                  span {{ result.display_phone }}
                //- p.subtitle.open Open until: 
                //-   span N/A
                //- p.subtitle.takeout Takeout: 
                //-   span {{ hasTakeout() }}
                p.subtitle.occasions Occasions: 
                  span {{ occasion }}
              .column.center
                //- button.button.is-medium.is-danger Check in
          hr
      .buttons
        router-link.button.is-light.is-medium(to="/start") Start over!
        button.button.is-danger.is-medium(@click="reroll") Re-roll
    template(v-else-if="result === null && !geoError")
      .loading
        h2.title {{ searching }}
        template(v-if="doneSearching && results.length === 0")
          router-link.button.is-light.is-medium(to="/start") Start over!
    template(v-else-if="geoError")
      h2.title Oops...
      h2.subtitle It seems like we can't find your location, please enter your location manually.
      .field.has-addons.manual-address
        .control
          input.input.is-medium(type="text", v-model="address", placeholder="Your current location address")
        .control
          button.button.is-danger.is-medium(@click="manualAddress()") Search
    template(v-else-if="noMore")
      h2.title You've reached the end! No more results :(
      router-link.button.is-light.is-medium(to="/start") Start over!
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
  id: string
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
  transactions: string[]
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
  private doneSearching = false

  private geoError = false
  private noMore = false
  private address = ""

  private get searching(): string {
    if (this.doneSearching && this.results.length === 0) {
      return "No results found. Try a different set of preferences!"
    } else {
      return "Searching..."
    }
  }

  private mounted() {
    this.selections = JSON.parse(window.localStorage.getItem("selections") ?? "[]")
    this.occasion = window.localStorage.getItem("occasion") ?? "quick"
    this.price = JSON.parse(window.localStorage.getItem("price") ?? "[1, 2]")
    this.price.sort()
    this.distance = parseFloat(window.localStorage.getItem("distance") ?? "2.5")

    navigator.geolocation.getCurrentPosition(
      success => {
        this.coordinates = success.coords

        axios.get(this.makeURL()).then(res => {
          this.doneSearching = true
          const results = res.data as YelpResult
          this.results = results.businesses
          shuffle(this.results)
          this.setRandomResult()
        })
      },
      () => {
        this.geoError = true
      },
    )
  }

  private get directions(): string {
    if (this.result) {
      return `https://google.com/maps/place/${encodeURIComponent(
        this.result.location.display_address.join(", "),
      )}`
    }
    return ""
  }

  private setRandomResult() {
    const head = this.results.pop()
    if (head) {
      this.result = head
    } else {
      console.log("No more results!")
      this.noMore = true
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
    return `https://harryhuang.api.stdlib.com/what-eat@dev/search/?term=${
      this.occasion
    }&categories=${this.getCategories()}&latitude=${this.coordinates.latitude}&longitude=${
      this.coordinates.longitude
    }&radius=${this.getRadius()}&price=${this.getPrice()}`
  }

  private manualAddress() {
    const address = this.address
    const url = `https://harryhuang.api.stdlib.com/what-eat@dev/search/?term=${
      this.occasion
    }&categories=${this.getCategories()}&location=${encodeURIComponent(
      address,
    )}&radius=${this.getRadius()}&price=${this.getPrice()}`

    axios.get(url).then(res => {
      this.doneSearching = true
      const results = res.data as YelpResult
      this.results = results.businesses
      shuffle(this.results)
      this.setRandomResult()
    })
  }

  private hasTakeout(): string {
    if (this.result && this.result.transactions.includes("pickup")) {
      return "Available"
    } else {
      return "Not available"
    }
  }

  private reroll() {
    this.setRandomResult()
  }
}
</script>

<style lang="sass" scoped>
@import "~bulma/sass/utilities/initial-variables.sass"
@import "~bulma/sass/utilities/derived-variables.scss"
@import "~bulma/sass/utilities/mixins.sass"

.buttons
  justify-content: center

p.subtitle.name, .bottom p.subtitle
  font-weight: 600

.bottom span
  font-weight: 400

.info
  text-align: left

img.place
  object-fit: cover
  width: 300px
  height: 240px

hr
  background-color: #ff7c03

h1.title, .price, .rating
  color: #ff7c03

.column.center
  text-align: center

.loading
  h2.title
    margin-top: 5rem

.manual-address
  justify-content: center
  input.input
    width: 24rem

.distance
  margin-top: 0.5rem

@include desktop
  h1.title
    margin-bottom: 4rem
  img.place
    width: 500px
    height: 500px
</style>
