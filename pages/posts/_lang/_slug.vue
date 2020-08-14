<template>
  <div class="section" :class="$style.post">
    <div class="container mx-auto" :class="$style.container">
      <breadcrumb :links="links" class="has-text-right" />

      <h1 class="is-size-4 has-text-weight-bold">{{ post.content.title }}</h1>
      <div>
        <small class="has-text-italic is-capitalized"
          >{{ $t('published_at', $route.params.lang) }} {{ publishedAt }}</small
        >
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

      <post-pagination
        v-if="
          post.content.previous_page.length > 0 ||
            post.content.next_page.length > 0
        "
        class="pt-4"
        :next-page="post.content.next_page[0]"
        :previous-page="post.content.previous_page[0]"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagePost',
  // scrollToTop: true,
  asyncData(context) {
    return context.app.$storyapi
      .get(
        'cdn/stories/posts/' + context.params.lang + '/' + context.params.slug
      )
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
        { label: 'Blog', value: '/posts', icon: 'view_list' }
      ]
    }
  },
  computed: {
    publishedAt() {
      const date = new Date(this.post.first_published_at)
      return this.$d(date, 'short', this.$route.params.lang)
    }
  },
  head() {
    return {
      title: this.post.content.title,
      htmlAttrs: {
        lang: this.$route.params.lang
      }
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
  h3, h4, h5
    font-weight: bold
    text-align: left
  h3
    margin-top: $size-3
    font-size: $size-3
    line-height: 1.3
  h4
    margin-top: $size-large
    font-size: $size-5
  h5
    margin-top: $size-large
    font-size: $size-6
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
