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
  }
}
</script>

<style lang="scss" scoped>
.main {
  color: $black;
}
</style>
