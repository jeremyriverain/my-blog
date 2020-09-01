<template>
  <div class="section">
    <div class="container mx-auto" :class="$style.container">
      <article class="media mb-0">
        <figure class="media-left">
          <p class="image is-48x48">
            <img
              v-lazy="project.content.image.filename"
              :alt="project.content.title + ' image'"
            />
          </p>
        </figure>
        <div class="media-content">
          <h1 class="is-size-3 has-text-weight-bold">
            {{ project.content.name }}
          </h1>
          <tags :tags="tags" />
        </div>
      </article>
      <p class="is-size-4 mt-2">{{ project.content.short_description }}</p>

      <slider
        v-if="hasCarousel"
        class="my-4"
        :carousel="project.content.carousel"
      />
    </div>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'PagePortfolioItem',
  // scrollToTop: true,
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/projects/' + context.params.slug)
      .then((res) => {
        console.log(res.data)
        return { project: res.data.story }
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res)
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api'
          })
        } else {
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  },
  data() {
    return {
      project: {}
    }
  },
  computed: {
    hasCarousel() {
      const carousel = this.project.content.carousel
      return Array.isArray(carousel) && carousel[0].slides.length > 0
    },
    tags() {
      const tags = cloneDeep(this.project.tag_list)
      tags.sort((a, b) => {
        return a.localeCompare(b)
      })

      return tags
    }
  },
  head() {
    return {
      title: this.project.content.name + ' | Portfolio Geekco'
    }
  }
}
</script>

<style lang="sass" module>
.container
  max-width: 768px
</style>
