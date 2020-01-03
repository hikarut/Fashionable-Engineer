<template>
  <span class="size">{{ temperature }}°</span>
</template>

<script>
export default {
  props: {
    temperature: {
      type: Number,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.size {
  font-size: 17px;
  font-weight: bold;
}
</style>
