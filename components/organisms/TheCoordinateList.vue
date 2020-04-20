<template>
  <div class="main">
    <div class="columns is-multiline is-mobile">
      <div v-for="(item, i) in items" :key="i" class="column is-one-third-desktop is-one-third-tablet is-half-mobile">
        <nuxt-link :to="`/coordinate/${item.id}`">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img v-lazy="imageUrl(item.img.url)">
              </figure>
            </div>
            <div class="card-content">
              <div class="center-text">
                <the-weather-icon :weather="item.weather" />
                <the-temperature :temperature="item.temperature" />
                <span class="date">{{ convert(item.createdAt) }}</span>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import TheWeatherIcon from '~/components/atoms/TheWeatherIcon.vue'
import TheTemperature from '~/components/atoms/TheTemperature.vue'
import { dateString } from '~/lib/date'
import { resizeImageUrl } from '~/lib/url'

export default {
  components: {
    TheWeatherIcon,
    TheTemperature
  },
  props: {
    items: {
      type: Array,
      default: null
    }
  },
  methods: {
    convert(str) {
      const detail = false
      return dateString(str, detail)
    },
    imageUrl(originUrl) {
      return resizeImageUrl(originUrl, process.env.CONSTANT.IMAGE_WIDTH)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
}
.main {
  width: 80%;
  margin: 0 auto;
  margin-top: 5%;
  margin-bottom: 5%;
}
.main p {
  margin-bottom: 30px;
}
.image img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
// スマホ
@media screen and (max-width: 769px) {
  .main {
    width: 90%;
    margin: 0 auto;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  .image img {
    height: 270px;
    object-fit: cover;
  }
  .card-content {
    padding: 0.7rem;
  }
}
// スマホでさらに小さい時
@media screen and (max-width: 450px) {
  .card-content {
    padding: 1rem;
  }
}
// PC
@media screen and (min-width: 769px) {
  .image img {
    height: 360px;
    object-fit: cover;
  }
  .card-content {
    padding: 0.5rem;
  }
}
.date {
  font-size: 14px;
}
</style>
