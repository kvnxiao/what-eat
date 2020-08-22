<template lang="pug">
section.section
  .container
    h1.title.is-size-1 You should visit...
    .columns
      .column
        img.place(src="https://instagram.fyto1-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/104761737_3968140833256818_2993283752768256929_n.jpg?_nc_ht=instagram.fyto1-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=0AqJvvWMzTIAX8lzeij&oh=5e1297b4357645a876e8531ee748e558&oe=5F69BF31")
      .column.info
        .columns
          .column
            p.subtitle.name Richmond Station
            p.subtitle.price $$$
            p.subtitle.rating 3.5/5
          .column.center
            button.button.is-medium.is-danger Get Directions
            p.subtitle.distance 2.7 km from you
        hr
        .bottom
          .columns
            .column
              p.subtitle.type Type of food: 
                span Canadian
              p.subtitle.phone Phone: 
                span 647-123-4567
              p.subtitle.open Open until: 
                span 9pm
              p.subtitle.takeout Takeout: 
                span Available
              p.subtitle.occasions Occasions: 
                span Date night, family dinner, special occasions
            .column.center
              button.button.is-medium.is-danger Check in
        hr
        .reroll
          button.button.is-danger.is-medium Re-roll
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Result extends Vue {}
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
