<template>
  <section class="hero is-medium is-bold">
    <div class="hero-body">
      <div class="container center-text">
        TwiiterまたはInstagramのDMからご連絡ください。
        <div class="contact">
          <p>
            <the-twitter-icon :url="twitterUrl"/>
            <a :href="twitterUrl" target="blank">{{ twitterUrl }}</a>
          </p>
          <p>
            <the-instagram-icon :url="instagramUrl"/>
            <a :href="instagramUrl" target="blank">{{ instagramUrl }}</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TheTwitterIcon from '~/components/atoms/TheTwitterIcon.vue'
import TheInstagramIcon from '~/components/atoms/TheInstagramIcon.vue'

export default {
  components: {
    TheTwitterIcon,
    TheInstagramIcon
  },
  data: () => ({
    twitterUrl: process.env.CONSTANT.TWITTER_URL,
    instagramUrl: process.env.CONSTANT.INSTAGRAM_URL
  })
}
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 30px;
}
@media screen and (max-width: 400px) {
  .contact {
    font-size: 12px;
  }
}
</style>
