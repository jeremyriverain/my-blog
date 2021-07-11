<template>
  <div class="section">
    <div class="container">
      <div class="columns g-container">
        <geek-title subtitle="Technologies that I know best">
          let
          <span class="has-text-primary">technologies</span> = () =>
        </geek-title>

        <div class="column">
          <div class="columns is-mobile is-multiline">
            <index-technology-item
              v-for="technology in technologies"
              :key="technology.id"
              :technology="technology"
              class="column is-half-tablet is-one-quarter-desktop"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexTechnologies',
  props: {
    technologies: {
      type: Array,
      required: true
    }
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  }
}
</script>

<style lang="sass" scoped></style>
