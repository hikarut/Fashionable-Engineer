<template>
  <div class="main">
    <the-hero />
    aaa
  </div>
</template>

<script>
import TheHero from '~/components/molecules/TheHero.vue'

export default {
  components: {
    TheHero
  },
  async asyncData({ $axios, params }) {
    $axios.setHeader(process.env.CONSTANT.API_HEADER, process.env.API_KEY)
    const result = await $axios.$get(process.env.CONSTANT.API_HOST_COORDINATE, {
      params: {
        limit: process.env.CONSTANT.API_PARAM_LIMIT
      }
    })
    console.log(result)
    return {
      result: result
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  color: $black;
}
</style>
