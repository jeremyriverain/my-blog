<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div
            class="column is-narrow is-mobile is-12-mobile"
            :class="$style.imageContainer"
          >
            <div :class="$style.image">
              <img src="~/assets/images/avatar.png" />
            </div>
          </div>

          <div
            class="column is-5-tablet is-12-mobile"
            :class="$style.textContainer"
          >
            <h1 class="is-size-5 has-text-weight-bold mb-1 title-black-block">
              <span>
                Jérémy Riverain
              </span>
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
export default {
  name: 'IndexProfile'
}
</script>

<style lang="sass" module>
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
