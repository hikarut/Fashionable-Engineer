<template>
  <div class="column-item">
    <div class="columns is-multiline">
      <div v-for="(item, i) in items" :key="i" class="column is-one-third">
        <nuxt-link :to="`/coordinate/${item.id}`">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img :src="item.img.url">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                {{ item.description }}
                <br>
                {{ item.date }}
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <button class="button is-fullwidth">もっと見る</button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    items: {
      type: Array,
      default: null
    }
  }
  /*
  data: () => ({
    items: [
      {
        title: 'コーディネート',
        date: '2019/11/03',
        label: 'info',
        url: '/about',
        img:
          'https://images.microcms-assets.io/protected/ap-northeast-1:5e827ad7-e52f-4bf1-9d3f-774895e60b63/service/fashionableengineer/media/wear01.jpg'
      },
      {
        title: 'コーディネート',
        date: '2019/10/28',
        label: 'info',
        url: '/about',
        img:
          'https://images.microcms-assets.io/protected/ap-northeast-1:5e827ad7-e52f-4bf1-9d3f-774895e60b63/service/fashionableengineer/media/wear01.jpg'
      },
      {
        title: 'コーディネート',
        date: '2019/10/28',
        label: 'info',
        url: '/about',
        img:
          'https://images.microcms-assets.io/protected/ap-northeast-1:5e827ad7-e52f-4bf1-9d3f-774895e60b63/service/fashionableengineer/media/wear01.jpg'
      },
      {
        title: 'コーディネート',
        date: '2019/10/28',
        label: 'info',
        url: '/about',
        img:
          'https://images.microcms-assets.io/protected/ap-northeast-1:5e827ad7-e52f-4bf1-9d3f-774895e60b63/service/fashionableengineer/media/wear01.jpg'
      },
      {
        title: 'コーディネート',
        date: '2019/08/18',
        label: 'info',
        url: '/about',
        img:
          'https://images.microcms-assets.io/protected/ap-northeast-1:5e827ad7-e52f-4bf1-9d3f-774895e60b63/service/fashionableengineer/media/wear01.jpg'
      }
    ]
  })
  */
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
  margin-bottom: 10%;
}
.column-item p {
  margin-bottom: 30px;
}
.image img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
