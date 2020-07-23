<template>
  <div>
    <footer class="footer" :class="$style.footer">
      <div class="content has-text-centered">
        <div class="columns">
          <div class="column">
            &copy;2020 Developed by Jérémy Riverain
          </div>
          <div class="column">
            <nuxt-link to="/" class="px-1">About me</nuxt-link>
            <nuxt-link to="/portfolio" class="px-1">Portfolio</nuxt-link>
            <nuxt-link to="/contact" class="px-1">Contact</nuxt-link>
            <nuxt-link to="/posts" class="px-1">Blog</nuxt-link>
          </div>
          <div class="column">
            <social-links />
          </div>
        </div>
        <p class="has-text-grey">
          Made with
          <a href="https://bulma.io/" class="is-underline has-text-grey"
            >Bulma</a
          >,
          <a href="https://nuxtjs.org/" class="is-underline has-text-grey"
            >Nuxt</a
          >,
          <a
            href="https://www.storyblok.com/"
            class="is-underline has-text-grey"
            >Storyblok</a
          >, hosted on
          <a href="https://www.netlify.com/" class="is-underline has-text-grey"
            >Netlify</a
          >
          <br />
          <a href="https://jamstack.wtf/" class="is-underline has-text-grey"
            >#JAMstack</a
          >
        </p>
      </div>
    </footer>
  </div>
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
  // padding: 1rem 2rem 1.5rem
</style>
