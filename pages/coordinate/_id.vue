<template>
  <div class="contents">
    <div class="columns">
      <div class="column is-three-fifths">
        <figure class="image">
          <img v-lazy="imageUrl(item.img.url)">
        </figure>
      </div>
      <div class="column">
        <the-weather-icon :weather="item.weather" />
        <the-temperature :temperature="item.temperature" />
        <span>{{ convert(item.createdAt) }}</span>
        <p class="description" v-html="item.description" />
        <the-model />
      </div>
    </div>

    <h3 class="subtitle is-5 center-text">着用アイテム</h3>
    <div class="columns is-mobile is-multiline wear-items">
      <div v-for="(name, j) in wear"
           v-if="item[name] !== null"
           :key="j"
           class="column is-one-third card-column">
        <template v-if="Array.isArray(item[name])">
          配列の場合
        </template>
        <template v-else>
          <nuxt-link :to="`/item/${name}/${item[name].id}`">
            <div class="card">
              <div class="card-content">
                <figure class="wear-image">
                  <img v-lazy="imageUrl(item[name].img.url)">
                </figure>
                <p class="wear-brand center-text">{{ item[name].brand }}</p>
                <p class="wear-name center-text">{{ item[name].name }}</p>
              </div>
            </div>
          </nuxt-link>
        </template>
      </div>
    </div>

  </div>
</template>

<script>
import TheWeatherIcon from '~/components/atoms/TheWeatherIcon.vue'
import TheTemperature from '~/components/atoms/TheTemperature.vue'
import TheModel from '~/components/atoms/TheModel.vue'
import { dateString } from '~/lib/date'
import { getItem } from '~/plugins/cms'
import { resizeImageUrl } from '~/lib/url'

export default {
  components: {
    TheWeatherIcon,
    TheTemperature,
    TheModel
  },
  data: () => ({
    wear: process.env.CONSTANT.ITEM_LIST
  }),
  methods: {
    convert(str) {
      return dateString(str)
    },
    imageUrl(originUrl) {
      return resizeImageUrl(originUrl, process.env.CONSTANT.IMAGE_WIDTH)
    }
  },
  async asyncData({ params }) {
    const item = await getItem('coordinate', params.id)
    console.log(item)
    return {
      id: params.id,
      item: item.data
    }
  }
}
</script>

<style lang="scss" scoped>
// 上書き
.columns {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding: 0.5rem;
}
.description {
  margin-top: 20px;
  margin-bottom: 20px;
}
.wear-image {
  width: 100px;
  margin: auto;
}
.wear-brand {
  font-size: 10px;
}
.wear-name {
  font-size: 8px;
}
.wear-items {
  margin-bottom: 30px;
}
.card-content {
  padding: 0.3rem;
}
.card-column {
  padding: 0.3rem;
}
// PC版はレイアウト調整する
@media screen and (min-width: 860px) {
  .contents {
    width: 80%;
    margin: 10px auto 30px;
  }
  .image {
    width: 400px;
    margin: auto;
  }
  .wear-image {
    width: 150px;
    margin: auto;
  }
}
</style>
