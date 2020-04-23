<template>
  <a :href="url" target="blank">
    <i class="fab fa-twitter"/>
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.fa-twitter {
  color: $twitterColor;
  font-size: 20px;
}
</style>
