<template>
  <div>
    <div
      class="card cursor-pointer"
      :class="$style.card"
      @click.prevent="$router.push('/projects/' + project.slug)"
    >
      <div class="card-content" style="min-height:80px">
        <article class="media mb-0">
          <figure class="media-left">
            <p class="image is-64x64">
              <img
                v-lazy="project.content.image.filename"
                :alt="project.content.title + ' image'"
              />
            </p>
          </figure>
          <div class="media-content">
            <nuxt-link :to="'/projects/' + project.slug">
              <strong class="is-uppercase">
                {{ project.content.name }}
              </strong>
            </nuxt-link>
            <!-- <tags v-if="project.tag_list.length > 0" :tags="tags" class="mb-0 mt-1" /> -->
            <div>
              <small>{{ project.content.short_description }}</small>
            </div>
          </div>
        </article>
      </div>
      <!--<footer class="card-footer">
        <nuxt-link
          v-ripple
          class="card-footer-item"
          :to="'/projects/' + project.slug"
        >
          <small>+ Read more</small>
        </nuxt-link>
      </footer>-->
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
</style>
