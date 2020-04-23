<template>
  <div class="card">
    <div class="card-content">
      <figure class="wear-image">
        <img v-lazy="img">
        <p v-if="price !== ''" class="wear-price">￥{{ price.toLocaleString() }}</p>
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
    },
    price: {
      type: Number,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.wear-image {
  text-align: center;
  position: relative;
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
.wear-price {
  position: absolute;
  color: $white;
  left: 5px;
  bottom: 10px;
  background-color: $black;
  padding: 2px 6px 2px 6px;
  border-radius: 2px;
  font-size: 12px;
}
// PC版はレイアウト調整する
@media screen and (min-width: 860px) {
  .wear-image img {
    height: 250px;
    object-fit: cover;
  }
  .wear-price {
    font-size: 14px;
  }
}
// ボックスの線を消す
.card {
  box-shadow: none;
}
</style>
