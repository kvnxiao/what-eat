<template lang="pug">
section.section
  .container
    h1.title.is-size-1 My preferences
    h2.title Occasion
    .buttons
      button.button(@click="setOccasion('date')", :class="{ active: isOccasion('date') }") Date night
      button.button(@click="setOccasion('brunch')", :class="{ active: isOccasion('brunch') }") Brunch
      button.button(@click="setOccasion('family')", :class="{ active: isOccasion('family') }") Family dining
      button.button(@click="setOccasion('quick')", :class="{ active: isOccasion('quick') }") Quick meal
      button.button(@click="setOccasion('special')", :class="{ active: isOccasion('special') }") Special occasion
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
      vue-slider(v-model="value", :marks="marks", :min="0", :max="10", :lazy="true", :interval="0.5")
    .buttons
      router-link.button.is-light.is-large(to="/start") Back
      router-link.button.is-danger.is-large(to="/roll") Next
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
  private price = 1
  private occasion = ""

  private marks = {
    "0": "",
    "2.5": "< 2.5 km",
    "5": "< 5 km",
    "7.5": "< 7.5 km",
    "10": "< 10 km",
  }
  private value = 0.5

  private mounted(): void {
    this.occasion = window.localStorage.getItem("occasion") ?? ""
    this.price = parseInt(window.localStorage.getItem("price") ?? "1")
  }

  private setOccasion(occasion: string) {
    this.occasion = occasion
    window.localStorage.setItem("occasion", this.occasion)
  }

  private isOccasion(occasion: string) {
    return this.occasion === occasion
  }

  private setPrice(p: number) {
    this.price = p
    window.localStorage.setItem("price", this.price.toString())
  }

  private isPrice(p: number): boolean {
    return this.price === p
  }
}
</script>

<style lang="sass" scoped>
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
</style>
