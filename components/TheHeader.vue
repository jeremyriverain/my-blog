<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item has-text-weight-semibold">
        Geek
        <img src="~/assets/lizard.svg" width="32" />
        Co
      </nuxt-link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <nuxt-link to="/projects" class="navbar-item">Projects</nuxt-link>
        <nuxt-link to="/contact" class="navbar-item">Contact</nuxt-link>
        <nuxt-link to="/posts" class="navbar-item">Posts</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>
