<template>
  <section class="section">
    <div class="container mx-auto" :class="$style.container">
      <h1 class="is-size-4 has-text-weight-bold">My portfolio</h1>
      <p>
        From web to mobile applications, essentially made with Vue.JS, Quasar,
        Symfony or ApiPlatform. Check out some projects I contributed to.
      </p>
      <project-tags class="my-4" />
      <project-list :projects="stories" />
    </div>
  </section>
</template>

<script>
import ProjectList from '~/components/ProjectList'
export default {
  name: 'PagePortfolio',
  components: { ProjectList },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories?starts_with=projects/', {
        version: 'published'
      })
      .then((res) => {
        return res.data
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
      stories: []
    }
  },
  head() {
    return {
      title: 'Portfolio - Jérémy Riverain - Developer'
    }
  }
}
</script>

<style lang="sass" module>
.container
  max-width: 768px
</style>
