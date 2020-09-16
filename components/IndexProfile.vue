<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <!-- <div
            class="column is-narrow is-mobile is-hidden-mobile"
            :class="$style.imageContainer"
          >
            <div :class="$style.image">
              <img src="~/assets/images/avatar.png" />
            </div>
          </div> -->

          <div
            class="column is-6-tablet is-12-mobile"
            :class="$style.textContainer"
          >
            <vue-typed-js
              :back-speed="50"
              smart-backspace
              auto-insert-css
              content-type="html"
              strings-element="#typed-strings"
              data-aos="fade-right"
            >
              <h1
                class="is-size-3 has-text-weight-bold mb-1 typing title-black-block"
                :class="$style.title"
              ></h1
            ></vue-typed-js>

            <h1
              id="typed-strings"
              class="is-size-3 has-text-weight-bold mb-1 title-black-block is-invisible"
            >
              <span>Hello world !</span>
              <span class="is-size-4">I'm Jérémy Riverain</span>
            </h1>

            <div>
              Fullstack developer, working a lot with PHP, Javascript,
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
