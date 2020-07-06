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

            <div :class="$style.links">
              <a :class="$style.link" href="https://github.com/jeremyriverain">
                <img src="~/assets/images/github.svg" />
              </a>
              <a
                :class="$style.link"
                href="https://twitter.com/jeremy_riverain"
              >
                <img src="~/assets/images/twitter.svg" />
              </a>
              <a
                :class="$style.link"
                href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-riverain-789462168/"
              >
                <img src="~/assets/images/linkedin.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" module>
.links
    margin-top: 0.7rem
    .link + .link
        margin-left: 0.3rem
    .link img
        width: 20px
</style>
