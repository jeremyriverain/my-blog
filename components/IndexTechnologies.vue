<template>
  <div class="section">
    <div class="container">
      <div class="columns" :class="$style.container">
        <geek-title subtitle="Technologies I like to work with">
          let
          <span class="has-text-primary">technologies</span> = () =>
        </geek-title>

        <div class="column">
          <div
            v-masonry
            transition-duration=".5s"
            item-selector=".item"
            class="masonry-container mt-3 mb-2"
            fit-width
            horizontal-order
          >
            <index-technology-item
              v-for="technology in technologies"
              :key="technology.id"
              :technology="technology"
              class="item py-2 px-2"
              :class="$style.item"
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

<style lang="sass" module>
.container
  @media screen and (max-width:1215px)
    display: block!important

.item
	width: calc(100%/3)
	max-width: 100%
@media screen and (max-width:768px)
  .item
    width: 50%
@media screen and (max-width:430px)
  .item
    width: 100%
</style>
