<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img src="~/assets/img/Logo.png">
      </nuxt-link>

      <a :class="[isOpen ? 'is-active' : '']"
         class="navbar-burger burger"
         role="button"
         aria-label="menu"
         aria-expanded="false"
         data-target="navbarBasicExample"
         @click="menu()"
      >
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
      </a>
    </div>

    <div id="navbarBasicExample" :class="[isOpen ? 'is-active' : '']" class="navbar-menu" @click="menu()">
      <div class="navbar-end">

        <nuxt-link class="navbar-item" to="/coordinate">
          coordinate
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/items">
          items
        </nuxt-link>

        <nuxt-link class="navbar-item" to="about">
          about
        </nuxt-link>

        <nuxt-link class="navbar-item" to="contact">
          contact
        </nuxt-link>

      </div>

    </div>
  </nav>
</template>

<script>
export default {
  components: {},
  data: () => ({
    isOpen: false
  }),
  methods: {
    menu() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-brand {
  border-bottom: 1px solid $gray;
}
</style>
