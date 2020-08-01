<template>
  <div>
    <footer class="footer" :class="$style.footer">
      <div class="container">
        <div class="content">
          <div class="columns">
            <div class="column" :class="$style.left">
              &copy;2020 Developed by Jérémy Riverain
            </div>
            <div class="column" :class="$style.middle">
              <nuxt-link to="/" class="px-1">About me</nuxt-link>
              <nuxt-link to="/portfolio" class="px-1">Portfolio</nuxt-link>
              <nuxt-link to="/contact" class="px-1">Contact</nuxt-link>
              <nuxt-link to="/blog" class="px-1">Blog</nuxt-link>
            </div>
            <div class="column" :class="$style.right">
              <social-links />
            </div>
          </div>
          <p class="has-text-grey has-text-centered">
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
            <a
              href="https://www.netlify.com/"
              class="is-underline has-text-grey"
              >Netlify</a
            >
            <br />
            <a href="https://jamstack.wtf/" class="is-underline has-text-grey"
              >#JAMstack</a
            >
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" module>
.footer
  // padding: 1rem 2rem 1.5rem
  .middle
    text-align: center
  .right
    text-align: right
  @media screen and (max-width: $tablet)
    .left, .right, .middle
      text-align: center
</style>
