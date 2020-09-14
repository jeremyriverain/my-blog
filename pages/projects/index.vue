<template>
  <section class="section">
    <!--<div class="container mx-auto" :class="$style.container">-->
    <div class="container mx-auto">
      <h1 class="is-size-4 has-text-weight-bold mb-1 typing title-black-block">
        My portfolio
      </h1>
      <p class="mt-3">
        From web to mobile applications, essentially made with Vue.JS, Quasar,
        Symfony or ApiPlatform.<br />
        Check out some projects I contributed to.
      </p>
      <filter-tags
        class="my-4"
        :tags="tags"
        :active-tag="activeTag"
        @input="activeTag = $event"
      />
      <project-list :projects="projects" />
    </div>
  </section>
</template>

<script>
import ProjectList from '~/components/ProjectList'
export default {
  name: 'PagePortfolio',
  components: { ProjectList },
  async asyncData(context) {
    const [projectsRes, tagsRes] = await Promise.all([
      context.app.$storyapi.get('cdn/stories?starts_with=projects/', {
        version: 'published'
      }),
      context.app.$storyapi.get('cdn/tags', {
        starts_with: 'projects/'
      })
    ])

    return {
      stories: projectsRes.data.stories,
      tags: tagsRes.data.tags
    }
  },
  data() {
    return {
      stories: [],
      tags: [],
      activeTag: null
    }
  },
  computed: {
    projects() {
      if (!this.activeTag) {
        return this.stories
      }

      return this.stories.filter((s) => s.tag_list.includes(this.activeTag))
    }
  },
  head() {
    return {
      title: 'Portfolio - Jérémy Riverain - Developer',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Portfolio of Jérémy Riverain, developer. Web and mobile applications, essentially made with Vue.JS, Quasar, Symfony or ApiPlatform'
        }
      ]
    }
  }
}
</script>

<style lang="sass" module>
.container
  max-width: 768px
</style>
