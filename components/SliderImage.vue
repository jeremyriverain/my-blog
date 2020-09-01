<template>
  <img
    v-lazy="imgResized(1200)"
    :data-srcset="
      imgResized(400) +
        ' 400w, ' +
        imgResized(800) +
        ' 800w, ' +
        imgResized(1200) +
        ' 1200w'
    "
    sizes="(max-width: 768px) 100vw, 768px"
    :alt="image.alt"
  />
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true
    }
  },
  computed: {
    filename() {
      return this.$options.filters.transformImage(this.image)
    }
  },
  methods: {
    imgResized(width) {
      return this.filename.replace(/%filter%/, width + 'x0')
    }
  }
}
</script>
