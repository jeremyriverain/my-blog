<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="is-size-4 has-text-weight-bold">
            Some projects to which I contributed
          </div>
          <project-list :projects="projects" />
          <div class="has-text-centered">
            <nuxt-link to="/portfolio" class="button is-outlined mt-4">
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
