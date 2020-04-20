<template>
  <i v-if="weather === '晴'" class="fas fa-sun" />
  <i v-else-if="weather === '曇'" class="fas fa-cloud" />
  <i v-else-if="weather === '雨'" class="fas fa-umbrella" />
  <i v-else-if="weather === '雪'" class="fas fa-snowman" />
  <span v-else>{{ weather }}</span>
</template>

<script>
export default {
  props: {
    weather: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.fas {
  font-size: 15px;
}
.fa-sun {
  color: $sun;
}
.fa-cloud {
  // color: $cloud;
}
.fa-umbrella {
  color: $rain;
}
.fa-snowman {
  color: $snow;
}
</style>
