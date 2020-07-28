<template>
  <div class="section">
    <div class="container">
      <h1 class="is-size-4 has-text-weight-bold">Posts</h1>
      <div>
        <div v-for="post in posts" :key="post.id" :post="post">
          <nuxt-link :to="'/blog/' + post.slug">
            {{ post.content.title }}
          </nuxt-link>
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

<style></style>
