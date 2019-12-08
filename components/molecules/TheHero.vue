<template>
  <div class="bg-image">
    <div class="bg-mask">
      <h1 class="title is-2">
        <p class="bg-text">エンジニアもおしゃれに</p>
        <p class="bg-text-sub">エンジニアの日々のコーディネートを投稿します</p>
      </h1>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bg-image {
  background: url('/Hero.jpg');
  width: 100%;
  height: 500px;
  background-size: cover;
}
.bg-mask {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.bg-text {
  color: $white;
  line-height: 3.5rem;
  padding-top: 120px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
}
.bg-text-sub {
  color: $white;
  line-height: 1.5rem;
  padding-top: 120px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
}
@media screen and (max-width: 400px) {
  .bg-text {
    font-size: 30px;
  }
  .bg-text-sub {
    font-size: 16px;
  }
}
</style>
