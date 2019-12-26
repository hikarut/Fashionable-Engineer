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
  </div>
</template>

<script>
import { dateString } from '~/lib/date'
import { getItem } from '~/plugins/cms'
import { resizeImageUrl } from '~/lib/url'

export default {
  components: {},
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
// PC版は幅を小さくする
@media screen and (min-width: 860px) {
  .contents {
    width: 80%;
    margin: 0 auto 30px;
  }
  .image {
    width: 400px;
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
</style>
