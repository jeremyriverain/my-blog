<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h2 class="is-size-4 has-text-weight-bold underlined">
            Portfolio
          </h2>
          <small class="is-italic">
            Some projects to which I contributed
          </small>
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
