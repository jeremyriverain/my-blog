<template>
  <carousel :per-page="1">
    <slide>
      <figure>
        <img
          v-lazy="'https://picsum.photos/1080/720'"
          alt="image description"
        />
        <figcaption class="has-text-centered">
          <small>An elephant at sunset</small>
        </figcaption>
      </figure>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  }
}
</script>
