<template>
  <span class="size">{{ temperature }}°</span>
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
.size {
  font-size: 20px;
  font-weight: bold;
}
</style>
