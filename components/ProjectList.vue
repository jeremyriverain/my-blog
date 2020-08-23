<template>
  <div
    v-masonry
    transition-duration=".5s"
    item-selector=".item"
    class="masonry-container"
    fit-width
    horizontal-order
    stagger="0.03s"
  >
    <project-item
      v-for="project in projects"
      :key="project.id"
      v-masonry-tile
      :project="project"
      class="item py-1 px-1"
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

<style scoped>
.list-complete-item {
  transition: all 0.5s;
  /* display: inline-block;
  margin-right: 10px; */
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>

<style lang="sass" module>
@media screen and (max-width:500px)
  .container
    // display: block !important
    .item
      // width: 100% !important
.item
	width: 25%
	max-width: 100%
@media screen and (max-width:768px)
  .item
    width: 50%
@media screen and (max-width:500px)
  .item
    width: 100%
</style>
