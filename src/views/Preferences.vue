<template lang="pug">
section.section
  .container
    h1.title.is-size-1 My preferences
    h2.title Occasion
    .buttons
      button.button Date night
      button.button Brunch
      button.button Family dining
      button.button Quick meal
      button.button Special occasion
    h2.title Price
    .field.has-addons.price
      p.control
        button.button $
      p.control
        button.button $$
      p.control
        button.button $$$
      p.control
        button.button $$$$
    h2.title Distance
    .slider
      vue-slider(v-model="value", :marks="marks", :min="0.5", :max="10", :lazy="true", :interval="0.5")
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
  private marks = {
    "0": "",
    "2.5": "< 2.5 km",
    "5": "< 5 km",
    "7.5": "< 7.5 km",
    "10": "< 10 km",
  }
  private value = 0.5
}
</script>

<style lang="sass" scoped>
.buttons
  justify-content: center

.price
  justify-content: center

h1.title
  color: #ff7c03

.slider
  max-width: 24rem
  margin: 0 auto 4rem auto
</style>
