<template lang="pug">
section.section
  .container
    h1.title.is-size-1 My preferences
    .occasion
      h2.title Occasion
      .buttons.occasions
        button.button(@click="setOccasion('Date Night')", :class="{ active: isOccasion('Date Night') }") Date night
        button.button(@click="setOccasion('Brunch')", :class="{ active: isOccasion('Brunch') }") Brunch
        button.button(@click="setOccasion('Family Restaurant')", :class="{ active: isOccasion('Family Restaurant') }") Family dining
        button.button(@click="setOccasion('Special Occasion Restaurant')", :class="{ active: isOccasion('Special Occasion Restaurant') }") Special occasion
        button.button(@click="setOccasion('Quick Bites')", :class="{ active: isOccasion('Quick Bites') }") Quick meal
        button.button(@click="setOccasion('food')", :class="{ active: isOccasion('food') }") Any occasion
    h2.title Price
    .field.has-addons.price
      p.control
        button.button(@click="setPrice(1)", :class="{ active: isPrice(1) }") $
      p.control
        button.button(@click="setPrice(2)", :class="{ active: isPrice(2) }") $$
      p.control
        button.button(@click="setPrice(3)", :class="{ active: isPrice(3) }") $$$
      p.control
        button.button(@click="setPrice(4)", :class="{ active: isPrice(4) }") $$$$
    h2.title Distance
    .slider
      vue-slider(v-model="distance", :marks="marks", :min="0", :max="10", :lazy="true", :interval="0.5", @change="changeDistance")
    .buttons
      router-link.button.is-light.is-large(to="/start") Back
      router-link.button.is-danger.is-large(to="/roll") Finish
</template>

<script lang="ts">
import VueSlider from "vue-slider-component"
import { Component, Vue } from "vue-property-decorator"

@Component({
  components: {
    VueSlider,
  },
})
export default class Preferences extends Vue {
  private prices: Set<number> = new Set([1, 2])
  private occasion = "Quick Bites"

  private marks = {
    "0": "",
    "2.5": "< 2.5 km",
    "5": "< 5 km",
    "7.5": "< 7.5 km",
    "10": "< 10 km",
  }
  private distance = 2.5

  private mounted(): void {
    this.occasion = window.localStorage.getItem("occasion") ?? "Quick Bites"
    this.prices = new Set(JSON.parse(window.localStorage.getItem("price") ?? "[1, 2]"))
    this.distance = parseFloat(window.localStorage.getItem("distance") ?? "2.5")
  }

  private setOccasion(occasion: string) {
    this.occasion = occasion
    window.localStorage.setItem("occasion", this.occasion)
  }

  private isOccasion(occasion: string) {
    return this.occasion === occasion
  }

  private changeDistance(value: number): void {
    window.localStorage.setItem("distance", value.toString())
  }

  private setPrice(p: number) {
    if (this.prices.has(p)) {
      this.prices.delete(p)
    } else {
      this.prices.add(p)
    }
    this.$forceUpdate()
    window.localStorage.setItem("price", JSON.stringify([...this.prices]))
  }

  private isPrice(p: number): boolean {
    return this.prices.has(p)
  }
}
</script>

<style lang="sass" scoped>
@import "~bulma/sass/utilities/initial-variables.sass"
@import "~bulma/sass/utilities/derived-variables.scss"
@import "~bulma/sass/utilities/mixins.sass"

.occasions
  margin-bottom: 0.75rem

.buttons
  justify-content: center

.price
  justify-content: center

button.button
  &:hover, &:focus, &:active
    border-color: lighten(#ff7c03, 10%)

button.button.active
  background-color: #ff7c03
  color: white

h1.title
  color: #ff7c03

.slider
  max-width: 24rem
  margin: 0 auto 4rem auto
  padding: 0 2rem

@include desktop
  h1.title
    margin-bottom: 3rem

  .occasions, .price, .slider
    margin-bottom: 3rem
</style>
