<template lang="pug">
section.hero.is-primary.is-fullheight
  .hero-body
    .container
      .header
        h1.title.is-size-1 What Eat
        h2.subtitle.is-size-3.is-italic Your #1 restaurant aggregator
      .go
        router-link.button.is-danger.is-large(to="/start") Get Started
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Home extends Vue {}
</script>

<style lang="sass" scoped>
section.hero.is-primary
  background-color: initial
  background-image: linear-gradient(rgba(255, 124, 3, 0.75), rgba(255, 124, 3, 0.75)), url(https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/1629eec0e96d/assets/img/home/hero_photos/3oz4uflrjm1Uftg_R689PA.jpg)

.go
  margin-top: 5rem
</style>
