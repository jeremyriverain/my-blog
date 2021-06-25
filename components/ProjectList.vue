<template>
  <div
    v-masonry
    transition-duration=".5s"
    item-selector=".item"
    class="masonry-container"
    fit-width
    horizontal-order
    data-cy="portfolio"
  >
    <project-item
      v-for="project in projects"
      :key="project.id"
      v-masonry-tile
      :project="project"
      class="item py-2 px-2"
      :class="$style.item"
    />
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  }
}
</script>

<style scoped></style>

<style lang="sass" module>
@media screen and (max-width:500px)
  .container
    // display: block !important
    .item
      // width: 100% !important
.item
	width: calc(100%/3)
	max-width: 100%
@media screen and (max-width:768px)
  .item
    width: 50%
@media screen and (max-width:500px)
  .item
    width: 100%
</style>
