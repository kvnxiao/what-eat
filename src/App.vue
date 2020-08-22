<template lang="pug">
#app
  router-view
  //- section.hero.is-primary.is-fullheight
  //-   .hero-body
  //-     .container
  //-       .header
  //-         h1.title.is-size-1 What Eat
  //-         h2.subtitle.is-size-3.is-italic Your #1 restaurant aggregator
  //-       .go
  //-         button.button.is-danger.is-large Get Started
  //- .search-bar
  //-   .field.has-addons
  //-     .control.has-icons-left.search
  //-       input.input.is-medium.is-rounded(type="text", placeholder="I'm feeling...")
  //-       span.icon.is-left
  //-         fa(icon="utensils")
  //-     .control.location
  //-       button.button.is-medium
  //-         span.icon
  //-           fa(icon="sliders-h")
  //-         span Location
  //-     .control
  //-       button.button.is-medium.is-rounded.is-danger
  //-         span.icon
  //-           fa(icon="search")
  //-         span Search
</template>

<style lang="sass">
$primary: #ff7c03
$danger: #d32323

$themeColor: #ff7c03
@import '~vue-slider-component/lib/theme/default.scss'

@import "~bulma/bulma"

@import url("https://fonts.googleapis.com/css2?family=Nunito&family=Nunito+Sans&display=swap")

#app
  font-family: 'Nunito Sans', Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

// #nav
//   padding: 30px

//   a
//     font-weight: bold
//     color: #2c3e50
//     &.router-link-exact-active
//       color: #42b983

// .search-bar
//   margin-top: 5rem
//   width: 100%

//   .field
//     width: 100%
//     justify-content: center

//   @include tablet
//     .control.search
//       width: 50%

// .location
//   .button
//     background-color: #ffdddd
</style>
