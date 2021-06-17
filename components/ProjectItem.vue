<template>
  <div>
    <div
      class="card cursor-pointer"
      :class="$style.card"
      @click.prevent="$router.push('/projects/' + project.slug)"
    >
      <div class="card-content" style="min-height:90px">
        <article class="media mb-0">
          <figure class="media-left">
            <p class="image is-48x48">
              <img
                v-lazy="project.content.image.filename"
                :alt="project.content.name + ' logo'"
                :class="$style.image"
              />
            </p>
          </figure>
          <div class="media-content">
            <nuxt-link :to="'/projects/' + project.slug">
              <strong class="is-uppercase">
                {{ project.content.name }}
              </strong>
            </nuxt-link>
            <div>
              <small>{{ project.content.short_description }}</small>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    tags() {
      const tags = Array.from(this.project.tag_list)
      return tags.sort((a, b) => a.localeCompare(b))
    }
  }
}
</script>

<style lang="sass" module>
.card
    // min-height: 100%
.image
  // height: 64px
  // object-fit: contain
</style>
