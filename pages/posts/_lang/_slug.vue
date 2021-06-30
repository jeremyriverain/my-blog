<template>
  <div class="section">
    <div class="container mx-auto g-container">
      <breadcrumb :links="links" class="has-text-right" />
      <div
        v-if="post.content.image"
        class="has-text-centered is-hidden-tablet g-image"
      >
        <div>
          <img
            v-lazy="
              filename.replace(
                /%filter%/,
                'fit-in/200x200/filters:fill(transparent):format(png)'
              )
            "
            :alt="post.content.image.alt"
            class="mb-1"
          />
        </div>
      </div>
      <h1 class="is-size-4 has-text-weight-bold">
        {{ post.content.title }}
      </h1>
      <div class="is-flex my-1">
        <small class="has-text-italic is-capitalized pt-1 pr-2"
          >{{ $t('published_at', $route.params.lang) }} {{ publishedAt }}</small
        >
        <tags v-if="post.tag_list.length > 0" :tags="post.tag_list" />
      </div>

      <content-section
        class="my-4"
        :content="$md.render(post.content.teaser)"
      />
      <content-section class="my-4" :content="$md.render(post.content.body)" />

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
  head() {
    return {
      title: this.post.content.title,
      htmlAttrs: {
        lang: this.$route.params.lang
      },
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.content.title
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.content.meta_description
        },
        {
          hid: 'description',
          name: 'description',
          content: this.post.content.meta_description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$config.baseUrl + '/bg_post.jpg'
        },
        {
          hid: 'article:published_time',
          property: 'article:published_time',
          content: this.post.first_published_at.split('T')[0]
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.$config.baseUrl + this.$route.fullPath
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: this.lang
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.content.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.content.meta_description
        }
      ],
      script: [
        {
          hid: 'structured_data',
          json: {
            '@context': 'http://schema.org',
            '@type': 'NewsArticle',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': this.$config.baseUrl + this.$route.fullPath
            },
            headline: this.post.content.title,
            image: [this.$config.baseUrl + '/bg_post.jpg'],
            datePublished: this.post.first_published_at,
            dateModified: this.post.first_published_at,
            author: {
              '@type': 'Person',
              name: 'Jérémy Riverain'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Geekco',
              logo: {
                '@type': 'ImageObject',
                url: this.$config.baseUrl + '/icon.png'
              }
            },
            description: this.post.content.meta_description
          },

          type: 'application/ld+json'
        }
      ]
    }
  },
  computed: {
    publishedAt() {
      const date = new Date(this.post.first_published_at)
      return this.$d(date, 'short', this.$route.params.lang)
    },
    lang() {
      return this.post.full_slug.search(/posts\/en\//g) !== -1 ? 'en' : 'fr'
    },
    filename() {
      return this.$options.filters.transformImage(this.post.content.image)
    }
  }
}
</script>

<style lang="sass" scoped>
.g-container
  max-width: 768px!important
.g-image
  display: flex
  justify-content: center
  img
    max-width: 80px!important
    width: 80px!important
    height: auto!important
</style>
