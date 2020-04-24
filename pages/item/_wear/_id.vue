<template>
  <div class="contents">
    <div class="columns">
      <div class="column is-three-fifths">
        <figure class="image">
          <img v-lazy="imageUrl(item.img.url)">
        </figure>
      </div>
      <div class="column">
        <p class="name">{{ item.name }}</p>
        <p>ブランド：{{ item.brand }}</p>
        <p class="price">￥{{ item.price.toLocaleString() }}</p>
        <p>サイズ：{{ item.size }}</p>
        <p class="description" v-html="item.description" />
      </div>
    </div>
    <p v-if="item.affiliate1 !== undefined" class="affiliate" v-html="item.affiliate1" />

    <template v-if="item.coordinate.length !== 0">
      <h3 class="subtitle is-5 center-text">このアイテムを使ったコーディネート</h3>
      <div class="columns is-mobile is-multiline wear-items is-gapless">
        <div v-for="(coordinate, j) in item.coordinate"
             :key="j"
             class="column is-one-third card-column">
          <nuxt-link :to="`${coordinatePath}/${coordinate.id}/`">
            <the-item :img="imageUrl(coordinate.img.url)"
                      :brand="convert(coordinate.createdAt, false)"
                      name="" />
          </nuxt-link>
        </div>
      </div>
    </template>

  </div>
</template>

<script>
import { dateString } from '~/lib/date'
import { getItem } from '~/plugins/cms'
import { resizeImageUrl } from '~/lib/url'
import TheItem from '~/components/molecules/TheItem.vue'

export default {
  components: { TheItem },
  data: () => ({
    coordinatePath: process.env.CONSTANT.API_PATH_COORDINATE
  }),
  head() {
    return {
      title: `${this.item.name} | ${this.item.brand}`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: `${this.item.name},${
            this.item.brand
          },¥${this.item.price.toLocaleString()},${this.item.size}`
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.item.name} | ${this.item.brand}`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${this.item.name} | ${this.item.brand}`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.CONSTANT.URL}${this.$route.path}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.item.name} | ${this.item.brand}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.imageUrl(this.item.img.url)
        }
      ]
    }
  },
  methods: {
    convert(str, detail) {
      return dateString(str, detail)
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
.name {
  font-size: 20px;
}
.price {
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0 10px 0;
}
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
.affiliate {
  width: 100px;
  margin: 0 auto;
  text-align: center;
  background-color: $black;
  margin-bottom: 50px;
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
