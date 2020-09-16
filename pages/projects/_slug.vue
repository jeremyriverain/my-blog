<template>
  <div class="section">
    <div class="container mx-auto" :class="$style.container">
      <breadcrumb :links="links" class="has-text-right" />
      <article class="media mb-0" data-aos="fade-up">
        <figure class="media-left">
          <p class="image is-48x48">
            <img
              v-lazy="project.content.image.filename"
              :alt="project.content.title + ' image'"
            />
          </p>
        </figure>
        <div class="media-content">
          <h1 class="is-size-3 has-text-weight-bold">
            {{ project.content.name }}
          </h1>
          <tags :tags="tags" />
        </div>
      </article>
      <p class="my-2 is-size-5">
        {{ project.content.short_description }}
      </p>

      <portfolio-links
        v-if="hasAnyLink"
        class="my-2"
        :app-link="appLink"
        :apple-store-link="appleStoreLink"
        :play-store-link="playStoreLink"
      />
      <slider
        v-if="hasCarousel"
        class="my-2"
        :carousel="project.content.carousel"
      />

      <content-section
        v-if="project.content.long_description"
        :content="$md.render(project.content.long_description)"
        class="my-2"
      />
    </div>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
import get from 'lodash/get'
import aosMixin from '~/mixins/aos'

export default {
  name: 'PagePortfolioItem',
  mixins: [aosMixin],
  // scrollToTop: true,
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/projects/' + context.params.slug)
      .then((res) => {
        console.log(res.data)
        return { project: res.data.story }
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
      project: {},
      links: [
        { label: 'Homepage', value: '/', icon: 'home' },
        { label: 'Portfolio', value: '/projects', icon: 'view_list' }
      ]
    }
  },
  computed: {
    hasCarousel() {
      const carousel = this.project.content.carousel
      return Array.isArray(carousel) && carousel.length > 0
    },
    appLink() {
      return get(this.project.content, 'app_link.url', null)
    },
    hasAppLink() {
      return this.appLink && this.appLink.length > 0
    },
    appleStoreLink() {
      return get(this.project.content, 'apple_store_link.url', null)
    },
    hasAppleStoreLink() {
      return this.appleStoreLink && this.appleStoreLink.length > 0
    },
    playStoreLink() {
      return get(this.project.content, 'play_store_link.url', null)
    },
    hasPlayStoreLink() {
      return this.playStoreLink && this.playStoreLink.length > 0
    },
    hasAnyLink() {
      return this.hasAppLink || this.hasAppleStoreLink || this.hasPlayStoreLink
    },
    tags() {
      const tags = cloneDeep(this.project.tag_list)
      tags.sort((a, b) => {
        return a.localeCompare(b)
      })

      return tags
    },
    title() {
      return this.project.content.name + ' | Portfolio Geekco'
    }
  },
  head() {
    return {
      title: this.title,
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.project.content.short_description
        },
        {
          hid: 'description',
          name: 'description',
          content: this.project.content.short_description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$config.baseUrl + '/bg_post.jpg'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.$config.baseUrl + this.$route.fullPath
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'en'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.project.content.short_description
        }
      ]
    }
  }
}
</script>

<style lang="sass" module>
.container
  max-width: 768px
</style>
