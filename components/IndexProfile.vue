<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div
            class="column is-6-tablet is-12-mobile"
            :class="$style.textContainer"
          >
            <h1 class="is-size-4">I'm Jérémy Riverain, developer</h1>

            <div>
              I work a lot with PHP, Javascript, especially
              <a href="https://symfony.com/">Symfony</a>
              and
              <a href="https://vuejs.org/">Vuejs</a>.<br />
              With those technologies, I made some websites, APIs, mobile apps
              and progressive web apps.
            </div>

            <div class="columns is-mobile is-vcentered mt-1">
              <social-links class="column" />
              <!-- <div class="column has-text-right">
                <resume-button />
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexProfile',
  data() {
    return {
      strings: [
        'Fullstack Developper, working a lot with PHP, Javascript, especially <a href="https://symfony.com/">Symfony</a> and <a href="https://vuejs.org/">Vuejs</a>.',
        'With those technologies, I made some websites, APIs, mobile apps and progressive web apps.'
      ]
    }
  }
}
</script>

<style lang="sass" module>
.title
  @media screen and (max-width: 550px)
    font-size: 1.6rem!important
.imageContainer
  max-width: 120px
@media screen and (max-width: $tablet)
  .textContainer
    padding-top: 0
  .imageContainer
    max-width: 96px
    height: 96px
    max-height: 96px
    padding-bottom: 0
    .image
      max-width: 100%
      height: auto
</style>
