<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered is-vcentered">
          <div class="column is-narrow">
            <p class="image is-128x128 g-mx-auto">
              <img src="~/assets/images/avatar.png" class="is-rounded" />
            </p>
          </div>

          <div class="column is-5-desktop">
            <h1 class="is-size-4 has-text-weight-bold">
              Jérémy Riverain
            </h1>
            <div>
              Fullstack Developper, working a lot with PHP, Javascript,
              especially
              <a href="https://symfony.com/">Symfony</a> and
              <a href="https://vuejs.org/">Vuejs</a>.<br />
              With those technologies, I made some websites, APIs, mobile apps
              or progressive web apps.
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
