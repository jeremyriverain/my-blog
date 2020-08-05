<template>
  <div class="section" :class="$style.post">
    <div class="container mx-auto" :class="$style.container">
      <breadcrumb :links="links" class="has-text-right" />

      <h1 class="is-size-4 has-text-weight-bold">{{ post.content.title }}</h1>
      <div>
        <small class="has-text-italic">Published at {{ publishedAt }}</small>
        <tags
          v-if="post.tag_list.length > 0"
          class="mt-1"
          :tags="post.tag_list"
        />
      </div>

      <div
        class="my-4 has-text-justified"
        v-html="$md.render(post.content.teaser)"
      />
      <div
        class="my-4 has-text-justified"
        v-html="$md.render(post.content.body)"
      />

      <post-resources
        v-if="post.content.resources.length > 0"
        class="mt-5"
        :resources="post.content.resources"
      />
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb'
import Tags from '~/components/Tags'
export default {
  name: 'PagePost',
  components: {
    Breadcrumb,
    Tags
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/posts/' + context.params.slug)
      .then((res) => {
        console.log(res.data)
        return { post: res.data.story }
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
      post: {},
      links: [
        { label: 'Homepage', value: '/', icon: 'home' },
        { label: 'Blog', value: '/blog', icon: 'view_list' }
      ]
    }
  },
  computed: {
    publishedAt() {
      const date = new Date(this.post.first_published_at)
      return date.toDateString()
    }
  }
}
</script>

<style lang="sass" module>
.container
  max-width: 768px
.post
  a
    text-decoration: underline
  p
    margin-top: $size-normal
    margin-bottom: $size-normal
  h4
    margin-top: $size-large
    font-size: $size-5
    font-weight: bold
  h5
    font-size: $size-6
    font-weight: bold
  pre
    padding: 0
    margin-top: $size-normal
    margin-bottom: $size-normal
  ul
    padding-left: 1.8rem
    margin-top: $size-normal
    margin-bottom: $size-normal
    li
      list-style-type: square
</style>
