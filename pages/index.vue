<template>
  <div class="main">
    <the-hero />
    <the-coordinate-list :items="items"/>
    <the-more-button text="コーディネート一覧を見る" link="/coordinate/page/1" />
    <the-ad-sense-display />
  </div>
</template>

<script>
import TheHero from '~/components/molecules/TheHero.vue'
import TheCoordinateList from '~/components/organisms/TheCoordinateList.vue'
import TheMoreButton from '~/components/atoms/TheMoreButton.vue'
import TheAdSenseDisplay from '~/components/atoms/TheAdSenseDisplay.vue'
import { getData } from '~/plugins/cms'

export default {
  components: {
    TheHero,
    TheCoordinateList,
    TheMoreButton,
    TheAdSenseDisplay
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
