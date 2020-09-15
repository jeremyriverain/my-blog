<template>
  <article class="media has-background-white-ter px-3 py-3">
    <figure class="media-left">
      <p class="image is-64x64">
        <img
          v-if="experience.image"
          v-lazy="require('~/assets/images/' + experience.image)"
        />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ experience.jobName }}</strong>
          <br />
          <span v-if="experience.company">{{ experience.company }}</span>
          <br v-if="experience.company" />
          <small>{{ experience.date }}</small>
          <br />
          <small>
            {{ experience.location }}
          </small>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ExperiencesItem',
  props: {
    experience: {
      type: Object,
      required: true
    }
  }
}
</script>
