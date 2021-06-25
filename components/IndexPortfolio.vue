<template>
  <div class="section">
    <div class="container">
      <div class="columns" :class="$style.container">
        <geek-title subtitle="Some projects I contributed to">
          let
          <span class="has-text-primary">portfolio</span> = () =>
        </geek-title>
        <div class="column">
          <project-list :projects="projects" class="mt-3" />
          <div class="has-text-centered">
            <nuxt-link
              v-ripple
              to="/projects"
              class="button mt-4"
              data-cy="portfolio-link"
            >
              <span>
                View more projects
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
