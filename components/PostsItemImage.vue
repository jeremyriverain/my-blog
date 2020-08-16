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
      if (!this.image.filename) {
        return ''
      }
      const filename = this.image.filename
      const extension = filename.split('.').pop()
      if (extension === 'svg') {
        return filename
      }

      return filename.replace(
        /a\.storyblok\.com\//g,
        'img2.storyblok.com/%filter%/'
      )
    }
  }
}
</script>

<style lang="sass" module>
.image
  max-width: 80px
  height: auto
</style>
