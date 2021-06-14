<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div
        class="navbar-item has-text-weight-semibold cursor-pointer"
        @click="onClickLogo"
      >
        <span class="has-text-white">
          Geek
        </span>
        <img src="~/assets/images/lizard.svg" width="32" alt="" />
        <span class="has-text-white">
          Co
        </span>
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
          to="/projects"
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
          to="/posts"
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
// .active-menu-item
//   position:  relative
//   // display: flex
//   // justify-content: center
//   // align-items: center
//   &:after
//     content: ''
//     position: absolute
//     left: 12px
//     right: 0
//     bottom: 10px
//     // height: 1px
//     width: 70%
//     max-width: 80px
//     // background: $dark
//     height: 2px
//     background: rgb(80,191,148);
//     background: linear-gradient(90deg, rgba(80,191,148,1) 32%, rgba(255,255,255,1) 100%);
//     @media screen and (min-width: 1024px)
//       margin: 0 auto
//       left: 0
</style>
