<template>
  <div class="section">
    <div class="container mx-auto" :class="$style.container">
      <h1 class="is-size-3 has-text-weight-bold mb-1 typing title-black-block">
        <span>Blog</span>
      </h1>

      <p class="mt-3">
        Blog posts about programming with PHP, Javascript and other technologies
        I use regularly.
      </p>
      <filter-tags
        class="mt-4 mb-2"
        :tags="tags"
        :active-tag="activeTag"
        data-aos="fade-left"
        @input="activeTag = $event"
      />
      <div>
        <posts-item
          v-for="(post, i) in posts"
          :key="post.id"
          :post="post"
          :right-icon="i % 2 === 0"
          class="mb-4"
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
  async asyncData(context) {
    const [postsRes, tagsRes] = await Promise.all([
      context.app.$storyapi.get('cdn/stories', {
        version: 'published',
        starts_with: 'posts/',
        sort_by: 'first_published_at:desc'
      }),
      context.app.$storyapi.get('cdn/tags', {
        starts_with: 'posts/'
      })
    ])

    return {
      stories: postsRes.data.stories,
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
    posts() {
      if (!this.activeTag) {
        return this.stories
      }

      return this.stories.filter((s) => s.tag_list.includes(this.activeTag))
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
