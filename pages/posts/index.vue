<template>
  <div class="section">
    <div class="container mx-auto g-container">
      <div class="columns is-mobile g-title-container">
        <div class="g-title-post">
          <h1
            class="is-size-3 has-text-weight-bold mb-2 typing title-black-block"
          >
            <span>Blog</span>
          </h1>
        </div>

        <div>
          <base-input
            class="column ml-3 g-input-search"
            label="Search"
            :value="term"
            name="search"
            @input="term = $event"
          ></base-input>
        </div>
      </div>

      <p class="mt-3 mb-5 is-size-5">
        Blog posts about programming with PHP, Javascript and other technologies
        I use regularly.
      </p>
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
export default {
  name: 'PagePosts',
  components: {},
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
      term: ''
    }
  },
  head() {
    return {
      title: 'Blog | Geekco'
    }
  },
  computed: {
    posts() {
      const searchTerm = this.term.toLowerCase()
      return this.stories.filter((s) => {
        if (s.content.title.toLowerCase().search(searchTerm) !== -1) {
          return true
        }

        const tags = s.tag_list.map((m) => m.toLowerCase())
        return tags.some((t) => t.search(searchTerm) !== -1)
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.g-container
  max-width: 768px!important
.g-title-container
  justify-content: space-between
  .g-title-post
    display: flex
    flex-direction: column
    justify-content: flex-end
  .g-input-search
    max-width: 200px
</style>
