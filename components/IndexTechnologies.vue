<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="is-size-4 has-text-weight-bold">
            Technologies I like to work with
          </div>

          <!--<div
            class="columns is-mobile is-multiline my-3 is-centered"
            :class="$style.technologies"
            >-->

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
          <!--</div>-->
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
// .technologies
  // @media screen and (max-width: 400px)
    // display: block!important
    // .technology
      // width: 100%
      // max-width: 300px
      // margin-left: auto
      // margin-right: auto

.item
	width: 25%
	max-width: 100%
@media screen and (max-width:768px)
  .item
    width: 50%
@media screen and (max-width:430px)
  .item
    width: 100%
</style>
