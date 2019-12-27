<template>
  <span>{{ temperature }}°</span>
</template>

<script>
export default {
  props: {
    temperature: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
