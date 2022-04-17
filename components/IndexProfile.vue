<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-6-tablet is-12-mobile g-textContainer">
            <h1 class="is-size-4">I'm Jérémy Riverain, developer</h1>

            <div>
              I work a lot with PHP, Javascript, especially
              <a href="https://symfony.com/">Symfony</a>
              and
              <a href="https://vuejs.org/">Vuejs</a>.<br />
              With those technologies, I made some websites, APIs, mobile apps
              and progressive web apps.
              <br />
              I recently began to learn Flutter and Dart.
            </div>

            <div class="columns is-mobile is-vcentered mt-1">
              <social-links class="column" />
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

<style lang="sass" scoped>
@media screen and (max-width: $tablet)
  .g-textContainer
    padding-top: 0
</style>
