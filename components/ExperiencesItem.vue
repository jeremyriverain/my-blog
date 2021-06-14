<template>
  <article class="media has-background-white-ter px-3 py-3">
    <figure class="media-left">
      <component
        :is="link ? 'a' : 'p'"
        :href="link"
        :target="link ? '_blank' : null"
        :rel="link ? 'noopener' : null"
        class="image is-64x64"
      >
        <img
          v-if="experience.content.image.id"
          v-lazy="experience.content.image.filename"
        />
      </component>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ experience.content.jobName }}</strong>
          <br />
          <span v-if="experience.content.company">{{
            experience.content.company
          }}</span>
          <br v-if="experience.content.company" />
          <small>{{ experience.content.date }}</small>
          <br />
          <small>
            {{ experience.content.location }}
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
  },
  computed: {
    link() {
      return this.experience.content.link.url.length > 0
        ? this.experience.content.link.url
        : null
    }
  }
}
</script>
