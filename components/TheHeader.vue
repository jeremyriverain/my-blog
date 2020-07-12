<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div
        class="navbar-item has-text-weight-semibold cursor-pointer"
        @click="onClickLogo"
      >
        Geek
        <img src="~/assets/images/lizard.svg" width="32" />
        Co
      </div>
      <a
        role="button"
        class="navbar-burger burger"
        :class="{ 'is-active': isActive }"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarMenu"
        @click="isActive = !isActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarMenu" class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-end">
        <nuxt-link
          to="/"
          class="navbar-item"
          exact-active-class="active-menu-item"
          >About me</nuxt-link
        >
        <nuxt-link
          to="/portfolio"
          class="navbar-item"
          exact-active-class="active-menu-item"
          >Portfolio</nuxt-link
        >
        <nuxt-link
          to="/contact"
          class="navbar-item"
          exact-active-class="active-menu-item"
          >Contact</nuxt-link
        >
        <nuxt-link
          to="/posts"
          class="navbar-item"
          active-class="active-menu-item"
          >Blog</nuxt-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    onClickLogo() {
      this.isActive = false
      this.$router.push('/')
    }
  }
}
</script>

<style lang="sass" scoped>
.active-menu-item
  background: $dark
</style>
