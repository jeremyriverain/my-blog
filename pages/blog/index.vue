<template>
  <div class="section">
    <div class="container mx-auto" :class="$style.container">
      <div>
        <div v-for="post in posts" :key="post.id" :post="post" class="mb-4">
          <nuxt-link
            :to="'/blog/' + post.slug"
            class="is-size-4 has-text-weight-bold"
          >
            {{ post.content.title }}
          </nuxt-link>

          <div
            v-if="post.content.body"
            class="has-text-justified"
            v-html="$md.render(post.content.teaser)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagePosts',
  components: {},
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories?starts_with=posts/', {
        version: 'published'
      })
      .then((res) => {
        return { posts: res.data.stories }
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
      posts: []
    }
  },
  head() {
    return {
      title: 'Blog | Geekco'
    }
  }
}
</script>

<style lang="sass" module>
.container
  max-width: 768px
</style>
