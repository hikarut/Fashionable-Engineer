<template>
  <div class="contents">
    <div class="columns">
      <div class="column is-three-fifths">
        <figure class="image">
          <img v-lazy="imageUrl(item.img.url)">
        </figure>
      </div>
      <div class="column">
        <p>{{ convert(item.createdAt) }}</p>
        <p>{{ item.weather }}:{{ item.temperature }}°</p>
        <p class="description" v-html="item.description" />
      </div>
    </div>

    <h3 class="subtitle is-5 center-text">着用アイテム</h3>
    <div class="columns is-mobile is-multiline wear-items">
      <div v-for="(name, j) in wear"
           v-if="item[name] !== null"
           :key="j"
           class="column is-one-third">
        <figure class="wear-image">
          <img v-lazy="imageUrl(item[name].img.url)">
        </figure>
        <p class="wear-brand center-text">{{ item[name].brand }}</p>
        <p class="wear-name center-text">{{ item[name].name }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import { dateString } from '~/lib/date'
import { getItem } from '~/plugins/cms'
import { resizeImageUrl } from '~/lib/url'

export default {
  components: {},
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
// 上書き
.columns {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
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
</style>
