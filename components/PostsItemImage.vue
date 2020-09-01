<template>
  <figure>
    <p class="image is-96x96">
      <nuxt-link :to="to">
        <img
          v-lazy="
            filename.replace(
              /%filter%/,
              'fit-in/200x200/filters:fill(transparent):format(png)'
            )
          "
          :alt="image.alt"
          :class="$style.image"
        />
      </nuxt-link>
    </p>
  </figure>
</template>

<script>
export default {
  name: 'PostsItemImage',
  props: {
    image: {
      type: [String, Object],
      required: true,
      default: () => {}
    },
    to: {
      type: [String, Object],
      required: true
    }
  },
  computed: {
    filename() {
      return this.$options.filters.transformImage(this.image)
    }
  }
}
</script>

<style lang="sass" module>
.image
  max-width: 80px
  height: auto
</style>
