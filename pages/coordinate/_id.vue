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
        <span class="date">{{ convert(item.createdAt, true) }}</span>
        <p class="description" v-html="item.description" />
        <the-model />
        <p class="sns">
          シェアする：<the-twitter-icon :url="shareUrl()"/>
        </p>
      </div>
    </div>

    <h3 class="blank subtitle is-5 center-text">着用アイテム</h3>
    <div class="columns is-mobile is-multiline wear-items is-gapless">
      <div v-for="(name, j) in wear"
           :key="j"
           class="column is-one-quarter-desktop is-one-third-mobile card-column">
        <nuxt-link :to="`/item/${name.path}/${name.id}`">
          <the-item :img="imageUrl(name.img.url)"
                    :brand="name.brand"
                    :name="name.name"
                    :price="name.price" />
        </nuxt-link>
        <p v-if="name.affiliate1 !== undefined" class="affiliate" v-html="name.affiliate1" />
      </div>
    </div>

    <the-more-button class="more-btn" text="コーディネート一覧を見る" link="/coordinate/page/1" />

  </div>
</template>

<script>
import TheWeatherIcon from '~/components/atoms/TheWeatherIcon.vue'
import TheTemperature from '~/components/atoms/TheTemperature.vue'
import TheMoreButton from '~/components/atoms/TheMoreButton.vue'
import TheTwitterIcon from '~/components/atoms/TheTwitterIcon.vue'
import TheItem from '~/components/molecules/TheItem.vue'
import TheModel from '~/components/atoms/TheModel.vue'
import { dateString } from '~/lib/date'
import { getItem } from '~/plugins/cms'
import { resizeImageUrl } from '~/lib/url'

export default {
  components: {
    TheWeatherIcon,
    TheTemperature,
    TheMoreButton,
    TheTwitterIcon,
    TheItem,
    TheModel
  },
  head() {
    return {
      title: `${this.convert(this.item.createdAt, false)} ${
        this.item.weather
      }:${this.item.temperature}°C コーディネート`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: `エンジニア,コーディネート,${this.item.weather},${
            this.item.temperature
          }°C,${this.wearItemName},${this.brandName}`
        },
        {
          hid: 'description',
          name: 'description',
          content: `エンジニアのコーディネート | ${this.item.weather}${
            this.item.temperature
          }°C ${this.wearItemName} | ${this.brandName}`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `エンジニアのコーディネート | ${this.item.weather}${
            this.item.temperature
          }°C ${this.wearItemName} | ${this.brandName}`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.CONSTANT.URL}${this.$route.path}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.convert(this.item.createdAt, false)} ${
            this.item.weather
          }${this.item.temperature}°C コーディネート`
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
    },
    shareUrl() {
      const url = `${process.env.CONSTANT.URL}${this.$route.path}`
      const text = 'エンジニアのコーディネート👨‍💻'
      const tag = `コーディネート,ファッション,${this.item.weather},${
        this.wearItemName
      },${this.brandName}`
      return `https://twitter.com/intent/tweet?url=${url}&text=${text}&hashtags=${tag}`
    }
  },
  async asyncData({ params }) {
    const item = await getItem('coordinate', params.id)
    const itemName = process.env.CONSTANT.ITEM_LIST
    let wear = []
    let wearItemName = []
    let brandName = []
    itemName.forEach(k => {
      // 配列の場合
      if (Array.isArray(item.data[k])) {
        const itemArray = item.data[k]
        itemArray.forEach(j => {
          // APIリクエスト用のパスを追加
          j['path'] = k
          wear.push(j)
          wearItemName.push(j.name)
          brandName.push(j.brand)
        })
        // それ以外は空以外なら追加
      } else if (item.data[k] !== null) {
        // APIリクエスト用のパスを追加
        item.data[k]['path'] = k
        wear.push(item.data[k])
        wearItemName.push(item.data[k].name)
        brandName.push(item.data[k].brand)
      }
    })
    console.log(wear)
    return {
      id: params.id,
      item: item.data,
      wear: wear,
      wearItemName: wearItemName.join(','),
      brandName: brandName.join(',')
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
  text-align: center;
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
.date {
  font-size: 13px;
}
.blank {
  margin-top: 50px;
}
.sns {
  text-align: right;
}
.affiliate {
  text-align: center;
  background-color: $black;
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
}
.more-btn {
  padding-top: 30px;
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
