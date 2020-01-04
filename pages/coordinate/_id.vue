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
           :key="j"
           class="column is-one-third card-column">
        <nuxt-link :to="`/item/${name.path}/${name.id}`">
          <the-item :img="imageUrl(name.img.url)"
                    :brand="name.brand"
                    :name="name.name" />
        </nuxt-link>
      </div>
    </div>

  </div>
</template>

<script>
import TheWeatherIcon from '~/components/atoms/TheWeatherIcon.vue'
import TheTemperature from '~/components/atoms/TheTemperature.vue'
import TheItem from '~/components/molecules/TheItem.vue'
import TheModel from '~/components/atoms/TheModel.vue'
import { dateString } from '~/lib/date'
import { getItem } from '~/plugins/cms'
import { resizeImageUrl } from '~/lib/url'

export default {
  components: {
    TheWeatherIcon,
    TheTemperature,
    TheItem,
    TheModel
  },
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
    const itemName = process.env.CONSTANT.ITEM_LIST
    let wear = []
    itemName.forEach(k => {
      // 配列の場合
      if (Array.isArray(item.data[k])) {
        const itemArray = item.data[k]
        itemArray.forEach(j => {
          // APIリクエスト用のパスを追加
          j['path'] = k
          wear.push(j)
        })
        // それ以外は空以外なら追加
      } else if (item.data[k] !== null) {
        // APIリクエスト用のパスを追加
        item.data[k]['path'] = k
        wear.push(item.data[k])
      }
    })
    return {
      id: params.id,
      item: item.data,
      wear: wear
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
.card-column {
  padding: 0.3rem;
}
.wear-items {
  margin-bottom: 20px;
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
}
</style>
