<template>
  <div class="card">
    <div class="card-content">
      <figure class="wear-image">
        <img v-lazy="img">
      </figure>
      <p class="wear-brand center-text">{{ brand }}</p>
      <p class="wear-name center-text">{{ name }}</p>
    </div>
  </div>
</template>

<script>
const constant = require('~/config/constant.json')
export default {
  props: {
    img: {
      type: String,
      default: ''
    },
    brand: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.wear-image {
  text-align: center;
}
.wear-image img {
  height: 130px;
  object-fit: cover;
}
.wear-brand {
  font-size: 12px;
  font-weight: bold;
}
.wear-name {
  font-size: 8px;
}
.wear-items {
  margin-bottom: 30px;
}
.card-content {
  padding: 0.5rem 0.5rem 1.5rem 0.5rem;
}
// PC版はレイアウト調整する
@media screen and (min-width: 860px) {
  .wear-image img {
    height: 250px;
    object-fit: cover;
  }
}
// ボックスの線を消す
.card {
  box-shadow: none;
}
</style>
