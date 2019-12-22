<template>
  <div class="column-item">
    <div class="columns is-multiline">
      <div v-for="(item, i) in items" :key="i" class="column is-one-third">
        <nuxt-link :to="`/coordinate/${item.id}`">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img v-lazy="imageUrl(item.img.url)">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                {{ convert(item.createdAt) }}
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { dateString } from '~/lib/date'
import { resizeImageUrl } from '~/lib/url'

export default {
  components: {},
  props: {
    items: {
      type: Array,
      default: null
    }
  },
  methods: {
    convert(str) {
      return dateString(str)
    },
    imageUrl(originUrl) {
      const width = 300
      return resizeImageUrl(originUrl, width)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
}
.column-item {
  width: 80%;
  margin: 0 auto;
  margin-top: 10%;
  margin-bottom: 5%;
}
.column-item p {
  margin-bottom: 30px;
}
.image img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
