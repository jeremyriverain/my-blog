<template>
  <div class="section mt-5">
    <div class="container mx-auto" :class="$style.container">
      <div>
        <posts-item
          v-for="(post, i) in posts"
          :key="post.id"
          :post="post"
          :right-icon="i % 2 === 0"
          class="mb-4"
          data-aos="fade-up"
        />
      </div>
    </div>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  name: 'PagePosts',
  components: {},
  mixins: [aosMixin],
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: 'published',
        starts_with: 'posts/',
        sort_by: 'first_published_at:desc'
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
