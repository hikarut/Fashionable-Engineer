<template>
  <div class="contents">
    <div class="columns">
      <div class="column is-three-fifths">
        <figure class="image">
          <img v-lazy="imageUrl(item.img.url)">
        </figure>
      </div>
      <div class="column">
        <p>{{ item.name }}</p>
        <p>{{ item.brand }}</p>
        <p>￥{{ item.price.toLocaleString() }}</p>
        <p>サイズ：{{ item.size }}</p>
        <p class="description" v-html="item.description" />
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
  head() {
    return {
      title: `${this.item.name} | ${this.item.brand}`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: `${this.item.name} ${
            this.item.brand
          } ￥${this.item.price.toLocaleString()} ${this.item.size}`
        }
      ]
    }
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
    const item = await getItem(params.wear, params.id)
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
  // URLなどの長い文字を折り返す
  word-wrap: break-word;
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
