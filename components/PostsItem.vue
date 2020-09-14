<template>
  <article class="media">
    <posts-item-image
      class="media-left is-hidden-mobile"
      :image="post.content.image"
      :to="post.full_slug"
    />
    <div class="media-content">
      <div class="content">
        <div
          v-if="post.content.image"
          class="has-text-centered is-hidden-tablet mr-3 my-1"
          :class="$style.image"
          style="float:left"
        >
          <img
            v-lazy="
              filename.replace(
                /%filter%/,
                'fit-in/200x200/filters:fill(transparent):format(png)'
              )
            "
            :alt="post.content.image.alt"
            class="mx-auto"
          />
        </div>
        <h2 class="mb-1 mt-0">
          <nuxt-link
            :to="post.full_slug"
            class="is-size-4 has-text-weight-bold text-primary"
            :class="$style.title"
          >
            <strong>{{ post.content.title }}</strong>
          </nuxt-link>
          <!--<strong>John Smith</strong> <small>@johnsmith</small>
          <small>31m</small>-->
        </h2>
        <div class="is-flex my-1">
          <small class="has-text-italic is-capitalized pt-1 pr-2"
            >{{ $t('published_at', lang) }} {{ publishedAt }}</small
          >
          <tags v-if="post.tag_list.length > 0" :tags="post.tag_list" />
        </div>
        <div
          v-if="post.content.body"
          class="has-text-justified"
          v-html="$md.render(post.content.teaser)"
        />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'PostsItem',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    lang() {
      return this.post.full_slug.search(/posts\/en\//g) !== -1 ? 'en' : 'fr'
    },
    filename() {
      return this.$options.filters.transformImage(this.post.content.image)
    },
    publishedAt() {
      const date = new Date(this.post.first_published_at)
      return this.$d(date, 'short', this.lang)
    }
  }
}
</script>

<style lang="sass" module>
.image
  max-width: 70px
  height: auto
  display: flex
  justify-content: center
</style>
