<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-narrow is-hidden-mobile">
            <p class="image is-96x96 g-mx-auto">
              <img src="~/assets/images/avatar.png" />
            </p>
          </div>

          <div class="column is-5-tablet">
            <h1 class="is-size-4 has-text-weight-bold">
              Jérémy Riverain
            </h1>
            <div>
              Fullstack Developper, working a lot with PHP, Javascript,
              especially
              <a href="https://symfony.com/">Symfony</a>
              and
              <a href="https://vuejs.org/">Vuejs</a>.<br />
              With those technologies, I made some websites, APIs, mobile apps
              and progressive web apps.
            </div>

            <social-links />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SocialLinks from '~/components/SocialLinks'
export default {
  name: 'IndexProfile',
  components: {
    SocialLinks
  }
}
</script>
