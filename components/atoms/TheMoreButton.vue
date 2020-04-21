<template>
  <div class="more">
    <button class="coordinate-btn button is-fullwidth" @click="go(link)">
      {{ text }}
    </button>
  </div>
</template>

<script>
import method from '~/mixins/method'

export default {
  mixins: [method],
  props: {
    text: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.more {
  width: 60%;
  margin: auto;
  margin-bottom: 50px;
}
.coordinate-btn {
  background-color: $black;
  color: $white;
}
</style>
