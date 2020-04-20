<template>
  <div class="main">
    <div class="bg-image">
      <div class="bg-mask">
        <h1 class="title is-2">
          <p class="bg-text">
            Fashionable Engineerは<br>
            エンジニアの日々の<br>コーディネートを投稿します。<br><br>
            その日の天気と気温も合わせて載せているので<br>
            季節感の参考にして頂ければと思います。
          </p>
        </h1>
      </div>
    </div>
    <div class="image">
      <figure class="image is-128x128">
        <img class="is-rounded" src="~/assets/img/profile.jpg">
      </figure>
      <div class="profile">
        <p class="center-text">ひかる</p>
        <p class="center-text"><a href="https://wear.jp/light940/">WEAR</a>フォロワー14,000人</p>
        <p class="blank center-text">【職業】</p>
        <p class="center-text">Webエンジニア/マネージャー/データサイエンティスト/複業(副業)エンジニア</p>
        <p class="blank center-text">【好きなブランド】</p>
        <p class="center-text">
          UNIQLO<br>
          GU<br>
          無印良品<br>
          ZARA<br>
          COS<br>
          BEAUTY&YOUTH UNITED ARROWS<br>
          nano univers<br>
          TOMORROW LAND<br>
          margin<br>
          MR.OLIVE<br>
          N HOOLYWOOD
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TheHero from '~/components/molecules/TheHero.vue'

export default {
  components: {
    TheHero
  }
}
</script>

<style lang="scss" scoped>
.bg-image {
  background: url('/Hero.jpg');
  width: 100%;
  height: 400px;
  background-size: cover;
}
.bg-mask {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.bg-text {
  color: $white;
  line-height: 1.5rem;
  padding-top: 120px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
}
.image {
  margin: 20px auto;
}
.profile {
  width: 60%;
  margin: auto;
}
@media screen and (max-width: 400px) {
  .bg-text {
    font-size: 16px;
  }
  .profile {
    width: 80%;
    margin: auto;
  }
}
.blank {
  margin-top: 15px;
}
</style>
