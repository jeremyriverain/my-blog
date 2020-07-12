<template>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered is-vcentered is-mobile">
          <!--<div class="column is-narrow">
          <p class="image is-96x96 g-mx-auto">
            <img src="~/assets/images/avatar.png" class="is-rounded" />
          </p>
        </div>-->

          <div class="column is-5-tablet">
            <h1 class="is-size-4 has-text-weight-bold">
              Jérémy Riverain
            </h1>
            <div>
              Fullstack Developper, working a lot with PHP, Javascript,
              especially
              <a href="https://symfony.com/" class="has-text-white">Symfony</a>
              and
              <a href="https://vuejs.org/" class="has-text-white">Vuejs</a
              >.<br />
              With those technologies, I made some websites, APIs, mobile apps
              and progressive web apps.
            </div>

            <social-links light />
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
