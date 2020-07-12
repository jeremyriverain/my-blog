<template>
  <footer class="footer has-background-dark" :class="$style.footer">
    <div class="content has-text-centered has-text-white">
      <div class="columns">
        <div class="column">
          &copy;2020 Developed by Jérémy Riverain
        </div>
        <div class="column">
          <nuxt-link to="/" class="px-1 has-text-white">About me</nuxt-link>
          <nuxt-link to="/portfolio" class="px-1 has-text-white"
            >Portfolio</nuxt-link
          >
          <nuxt-link to="/contact" class="px-1 has-text-white"
            >Contact</nuxt-link
          >
          <nuxt-link to="/posts" class="px-1 has-text-white">Blog</nuxt-link>
        </div>
        <div class="column">
          <social-links light />
        </div>
      </div>
      <p class="has-text-grey-light">
        Made with
        <a href="https://bulma.io/" class="is-underline has-text-grey-light"
          >Bulma</a
        >
        and
        <a href="https://nuxtjs.org/" class="is-underline has-text-grey-light"
          >Nuxt</a
        >, hosted on
        <a
          href="https://www.netlify.com/"
          class="is-underline has-text-grey-light"
          >Netlify</a
        >
        <br />
        <a href="https://jamstack.wtf/" class="is-underline has-text-grey-light"
          >#JAMstack</a
        >
      </p>
    </div>
  </footer>
</template>

<script>
import SocialLinks from '~/components/SocialLinks'
export default {
  components: {
    SocialLinks
  }
}
</script>

<style lang="sass" module>
.footer
  padding: 2rem 1.5rem
</style>
