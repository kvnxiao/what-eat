<template lang="pug">
section.section
  .container
    h1.title.is-size-1 I like...
    .columns
      .column
        .selection
          img(src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chinese-food-blank-background-royalty-free-image-545286388-1538687369.jpg?crop=0.689xw:1.00xh;0,0&resize=980:*")
          span.title.is-size-3 Chinese
        .selection
          img(src="https://instagram.fyto1-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/95093987_119314199748664_997984119995364742_n.jpg?_nc_ht=instagram.fyto1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=G5FQ86xvZrwAX-ZzJdC&oh=c433bf19993017f0de75c07ccdb7043f&oe=5F6C5109")
          span.title.is-size-3 Italian
        .selection
          img(src="https://instagram.fyto1-2.fna.fbcdn.net/v/t51.2885-15/e35/94824014_178201646670884_4371480529413790494_n.jpg?_nc_ht=instagram.fyto1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=PNh8D5F1nmwAX_dBnTE&oh=f2f004826c4c7e7ac35b643cdd1b0a4c&oe=5F6B02C4")
          span.title.is-size-3 Fast Food
      .column
        .selection
          img(src="https://d1ralsognjng37.cloudfront.net/432832c6-ad63-4ee2-abbd-ad4a627b5b76")
          span.title.is-size-3 Middle Eastern
        .selection
          img(src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/best_and_worst_thai_dishes_for_your_health_slideshow/1800ss_thinkstock_rf_tom_yum_soup.jpg?resize=650px:*")
          span.title.is-size-3 Thai
        .selection
          img(src="https://instagram.fyto1-2.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/117768336_986005228513185_7541628657455995155_n.jpg?_nc_ht=instagram.fyto1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=hk0p3z2jsVkAX-vrGwS&oh=26963e65b74ec04638b1c813db4f3420&oe=5F6AC4FC")
          span.title.is-size-3 Korean
      .column
        .selection
          img(src="https://instagram.fyto1-1.fna.fbcdn.net/v/t51.2885-15/e35/66480171_211148053133981_1009633982700837960_n.jpg?_nc_ht=instagram.fyto1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=KwuBbDiK-8YAX8LS7_-&oh=91872527b07901d7c332441ecda8326f&oe=5F6A9EE2")
          span.title.is-size-3 Japanese
        .selection
          img(src="https://instagram.fyto1-2.fna.fbcdn.net/v/t51.2885-15/e35/117548418_1171603879886109_6184570646117416641_n.jpg?_nc_ht=instagram.fyto1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=aEy2-12VjlQAX-ir6dU&oh=ce32cf0152915ec64802dddea7dd7515&oe=5F6BF66F")
          span.title.is-size-3 Indian
        .selection
          img(src="https://www.2foodtrippers.com/wp-content/uploads/2019/02/Ethiopian-Food-Mixed-Plate.jpg")
          span.title.is-size-3 Ethiopian
      .column
        .selection
          img(src="https://instagram.fyto1-2.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/98306549_599312210791858_3141894645516292656_n.jpg?_nc_ht=instagram.fyto1-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=PUIPZiPgEV8AX_8EHO_&oh=9d9967e0b95c302ce5d1aac627f65adb&oe=5F6C6D72")
          span.title.is-size-3 Mexican
        .selection
          img(src="https://instagram.fyto1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/118123442_220219159419821_3192659291727389907_n.jpg?_nc_ht=instagram.fyto1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=6SUtbhF6fR0AX9amJnu&oh=0faeb90dc3ab3a13a2d133e322a94350&oe=5F6B2775")
          span.title.is-size-3 Caribbean
        .selection
          img(src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/more-diet.jpg?itok=y9x4cqn-")
          span.title.is-size-3 Mediterranean
    router-link.button.is-danger.is-large(to="/preferences") Next
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Start extends Vue {}
</script>

<style lang="sass" scoped>
.title
  color: #ff7c03

.selection
  position: relative
  display: flex
  justify-content: center
  width: 250px
  height: 250px
  margin: 1rem auto

  img
    position: relative

  span.title
    color: white
    position: absolute
    top: calc(50% - 0.5em)
    text-shadow: 2px 2px #4a3f35

img
  object-fit: cover
  opacity: 1

.column
  padding: 0

.columns
  max-width: 1100px
  margin: 0 auto
</style>
