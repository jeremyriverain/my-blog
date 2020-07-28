<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
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
          @click.native="isActive = false"
          >About me</nuxt-link
        >
        <nuxt-link
          to="/portfolio"
          class="navbar-item"
          exact-active-class="active-menu-item"
          @click.native="isActive = false"
          >Portfolio</nuxt-link
        >
        <nuxt-link
          to="/contact"
          class="navbar-item"
          exact-active-class="active-menu-item"
          @click.native="isActive = false"
          >Contact</nuxt-link
        >
        <nuxt-link
          to="/blog"
          class="navbar-item"
          active-class="active-menu-item"
          @click.native="isActive = false"
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
// @media screen and (min-width: 1024px)
//   .active-menu-item
//     background: $dark
</style>
