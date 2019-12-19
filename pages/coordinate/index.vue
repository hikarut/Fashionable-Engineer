<template>
  <div class="main">
    <the-coordinate-list :items="items"/>
  </div>
</template>

<script>
import TheCoordinateList from '~/components/organisms/TheCoordinateList.vue'
import { getData } from '~/plugins/cms'

export default {
  components: {
    TheCoordinateList
  },
  async asyncData() {
    const items = await getData()
    return {
      items: items.data.contents
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  color: $black;
}
</style>
