<template>
  <div class="bg-image">
    <div class="bg-mask">
      <h1 class="title is-2">
        <p class="bg-text">エンジニアの日々のコーディネートを</p>
      </h1>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bg-image {
  background: url('/Hero_top.jpg');
  width: 100%;
  height: 400px;
  background-size: cover;
}
.bg-mask {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.bg-text {
  color: $white;
  line-height: 1.5rem;
  padding-top: 150px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  font-size: 30px;
}
@media screen and (max-width: 400px) {
  .bg-text {
    font-size: 18px;
  }
  .bg-image {
    height: 300px;
  }
}
</style>
