<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <img src="~/assets/img/Logo2.png" width="200px">
    </div>
    <div class="content has-text-centered">
      Copyright &copy;&nbsp;{{ date }}&nbsp;&nbsp;Fashionable Engineer
    </div>
  </footer>
</template>

<script>
export default {
  components: {},
  data: () => ({
    date: new Date().getFullYear()
  })
}
</script>

<style lang="scss" scoped>
.footer {
  height: 150px;
  background-color: $black;
  color: $white;
}
</style>
