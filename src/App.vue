<template lang="pug">
#app
  .container
    nav.navbar
      .navbar-brand
        router-link.navbar-item(to="/")
          img.logo(src="/logo.png")
          span.title.is-size-4 What Eat
  router-view
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

img.logo
  border-radius: 50%
  margin-right: 0.5rem

nav.navbar
  .title
    color: #ff7c03

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
