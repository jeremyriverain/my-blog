<template>
  <client-only>
    <agile
      v-if="slides.length > 0"
      :per-page="1"
      fade
      :nav-buttons="slides.length > 1"
      :dots="false"
      @after-change="(e) => (currentSlide = e.currentSlide)"
    >
      <div v-for="slide in slides" :key="slide._uid">
        <figure>
          <slider-image :image="slide.image" />
          <!--<figcaption v-if="slide.image.title" class="has-text-centered">
            <small>{{ slide.image.title }}</small>
          </figcaption>-->
        </figure>
      </div>
      <template slot="caption">
        <div class="has-text-centered">
          <small>{{ slides[currentSlide].image.title }}</small>
        </div>
      </template>
      <template slot="prevButton">
        <span class="icon is-left is-small">
          <span class="material-icons">
            keyboard_arrow_left
          </span>
        </span>
      </template>
      <template slot="nextButton">
        <span class="icon is-left is-small">
          <span class="material-icons">
            keyboard_arrow_right
          </span>
        </span>
      </template>
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
  },
  data() {
    return {
      currentSlide: 0
    }
  }
}
</script>
