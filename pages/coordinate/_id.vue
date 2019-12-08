<template>
  <div>
    {{ id }}
  </div>
</template>

<script>
export default {
  components: {},
  async asyncData({ params }) {
    return {
      id: params.id
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
