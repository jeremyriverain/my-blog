<template>
  <client-only>
    <agile v-if="slides.length > 0" :per-page="1" :nav-buttons="false" fade>
      <div v-for="slide in slides" :key="slide._uid">
        <figure>
          <img v-lazy="slide.image.filename" :alt="slide.image.alt" />
          <figcaption v-if="slide.image.title" class="has-text-centered">
            <small>{{ slide.image.title }}</small>
          </figcaption>
        </figure>
      </div>
    </agile>
  </client-only>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    carousel: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.length > 0 && Array.isArray(value[0].slides)
      }
    }
  },
  computed: {
    slides() {
      return this.carousel[0].slides
    }
  }
}
</script>
