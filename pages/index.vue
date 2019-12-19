<template>
  <div class="main">
    <the-hero />
    <the-coordinate-list :items="items"/>
    <div class="more">
      <button class="button is-fullwidth" @click="go('/coordinate')">もっと見る</button>
    </div>
  </div>
</template>

<script>
import TheHero from '~/components/molecules/TheHero.vue'
import TheCoordinateList from '~/components/organisms/TheCoordinateList.vue'
import { getData } from '~/plugins/cms'
import method from '~/mixins/method'

export default {
  components: {
    TheHero,
    TheCoordinateList
  },
  mixins: [method],
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
.more {
  width: 50%;
  margin: auto;
  margin-bottom: 50px;
}
</style>
