<template>
  <div class="section">
    <div class="container">
      <div class="columns" :class="$style.container">
        <div>
          <div class="has-background-dark px-3 py-3 has-text-white">
            <div class="is-size-5 has-text-weight-bold">
              /** Some projects to which I have contributed */
            </div>
            <h2 class="is-size-3 has-text-weight-bold has-text-white">
              let
              <span class="has-text-primary">portfolio</span> = () => return [
            </h2>
          </div>
        </div>
        <div class="column">
          <project-list :projects="projects" class="mt-3" />
          <div class="has-text-centered">
            <nuxt-link v-ripple to="/projects" class="button is-outlined mt-4">
              <span>
                View more
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPortfolio',
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass" module>
.container
  @media screen and (max-width:1215px)
    display: block!important
</style>
