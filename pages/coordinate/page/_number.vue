<template>
  <div class="main">
    <the-coordinate-list :items="items"/>
    <the-pagination :total="total" :page="page" />
  </div>
</template>

<script>
import TheCoordinateList from '~/components/organisms/TheCoordinateList.vue'
import ThePagination from '~/components/molecules/ThePagination.vue'
import { getData } from '~/plugins/cms'
import { checkPage } from '~/lib/validation'

export default {
  // head() {
  //   return {
  //     link: [
  //       {
  //         rel: 'canonical',
  //         href: 'http://localhost:3000/coordinate/page/1'
  //       }
  //     ]
  //   }
  // },
  components: {
    TheCoordinateList,
    ThePagination
  },
  async asyncData({ params }) {
    const page = checkPage(params.number)
    const start = (page - 1) * process.env.CONSTANT.POST_PER_PAGE
    const items = await getData(start, process.env.CONSTANT.POST_PER_PAGE)
    return {
      items: items.data.contents,
      total: items.data.totalCount,
      page: page
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  color: $black;
}
</style>
