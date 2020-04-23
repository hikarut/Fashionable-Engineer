<template>
  <a :href="url" target="blank">
    <i class="fab fa-instagram"/>
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
.fa-instagram {
  color: $instagramColor;
  font-size: 20px;
}
</style>
