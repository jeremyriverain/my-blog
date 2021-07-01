import dateTimeFormats from './i18n/dateTimeFormats'
import messages from './i18n/messages'
// eslint-disable-next-line nuxt/no-cjs-in-config
const StoryblokClient = require('storyblok-js-client')

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})

const title = 'Jérémy Riverain - Developer'
const description =
  'Jérémy Riverain, fullstack developer. Making websites, APIs, PWAs, mobile apps. Working a lot with PHP, Symfony, JS, Vuejs'

export default {
  target: 'static',
  components: true,
  /*
   ** Headers of the page
   */
  head: {
    title,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Geekco'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'en'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: process.env.BASE_URL + '/bg_post.jpg'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: process.env.BASE_URL
      },
      {
        hid: 'profile:first_name',
        property: 'profile:first_name',
        content: 'Jérémy'
      },
      {
        hid: 'profile:last_name',
        property: 'profile:last_name',
        content: 'Riverain'
      },
      {
        hid: 'profile:gender',
        property: 'profile:gender',
        content: 'male'
      },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: process.env.FB_APP_ID
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@jeremy_riverain'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@jeremy_riverain'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: process.env.BASE_URL + '/bg_post.jpg'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        // https://material.io/resources/icons/?icon=mail_outline&style=baseline
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      },
      {
        rel: 'preconnect',
        href: '//img2.storyblok.com',
        crossorigin: true
      },
      { rel: 'preconnect', href: '//a.storyblok.com', crossorigin: true }
    ],
    script: [
      {
        hid: 'structured_data',
        json: {
          '@context': 'http://schema.org',
          '@type': 'Person',
          givenName: 'Jérémy',
          familyName: 'Riverain',
          jobTitle: title,
          description,
          image: process.env.BASE_URL + '/jeremy_riverain.png',
          url: process.env.BASE_URL,
          sameAs: ['https://twitter.com/jeremy_riverain'],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+33769141322',
            email: 'jeremy@geekco.fr',
            contactType: 'Customer service'
          }
        },
        type: 'application/ld+json'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    // { src: '~/node_modules/highlight.js/styles/hopscotch.css', lang: 'css' },
    // { src: '~/node_modules/highlight.js/styles/monokai.css', lang: 'css' },
    // {
    //   src: '~/node_modules/highlight.js/styles/gruvbox-dark.css',
    //   lang: 'css'
    // },
    // {
    //   src: '~/node_modules/highlight.js/styles/dracula.css',
    //   lang: 'css'
    // },
    {
      src: '~/node_modules/highlight.js/scss/night-owl.scss',
      lang: 'scss'
    },
    '~/assets/main.sass'
  ],
  styleResources: {
    sass: './assets/vars/*.sass'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/filters/transform-image.js',
    '@/plugins/vuelidate.js',
    '@/plugins/vue-lazyload.js',
    { src: '@/plugins/pwa.client.js', mode: 'client' },
    { src: '@/plugins/vue-ripple-directive', mode: 'client' },
    { src: '~/plugins/vue-masonry', ssr: false },
    { src: '~/plugins/vue-agile' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    [
      'nuxt-purgecss',
      {
        styleExtensions: ['.sass', '.scss'],
        whitelist: [],
        whitelistPatterns: [/^agile/, /^hljs/]
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    'nuxt-i18n',
    '@nuxtjs/pwa',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        cacheProvider: 'memory',
        customParent: 'YOUR_URL_WHERE_RUN_STORYBLOK_APP' // optional https://www.storyblok.com/docs/Guides/storyblok-latest-js#storyblokinitconfig
      }
    ],
    '@nuxtjs/robots',
    '@nuxtjs/sitemap' // If you use other modules (eg. nuxt-i18n), always declare the sitemap module at end of array
  ],
  robots: {
    Sitemap: process.env.BASE_URL + '/sitemapindex.xml'
  },
  markdownit: {
    injected: true,
    breaks: true,
    use: ['markdown-it-highlightjs']
  },
  sitemap: [
    {
      hostname: process.env.BASE_URL,
      path: '/sitemap-general.xml'
    },
    {
      hostname: process.env.BASE_URL,
      path: '/sitemap-posts.xml',
      routes: async () => {
        const { data } = await Storyblok.get('cdn/stories', {
          token: process.env.STORYBLOK_ACCESS_TOKEN,
          version: 'published',
          starts_with: 'posts/',
          sort_by: 'first_published_at:desc'
        })

        return data.stories.map((story) => {
          return {
            url: story.full_slug,
            lastmod: story.published_at
          }
        })
      },
      exclude: ['/**']
    },
    {
      hostname: process.env.BASE_URL,
      path: '/sitemap-portfolio.xml',
      routes: async () => {
        const { data } = await Storyblok.get('cdn/stories', {
          token: process.env.STORYBLOK_ACCESS_TOKEN,
          version: 'published',
          starts_with: 'projects/'
        })

        return data.stories.map((story) => {
          return {
            url: story.full_slug,
            lastmod: story.published_at
          }
        })
      },
      exclude: ['/**']
    },
    {
      hostname: process.env.BASE_URL,
      path: '/sitemap.xml',
      sitemaps: [
        {
          path: '/sitemap-general.xml'
        },
        {
          path: '/sitemap-posts.xml'
        },
        {
          path: '/sitemap-portfolio.xml'
        }
      ]
    }
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    transpile: ['vue-agile'],
    // extractCSS: true,

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL
  },
  privateRuntimeConfig: {},
  i18n: {
    // detectBrowserLanguage: false,
    // locales: ['en', 'fr'],
    // defaultLocale: 'en',
    // strategy: 'no_prefix',
    // parsePages: false,
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'en',
      dateTimeFormats,
      messages
    }
  },
  router: {},
  proxy: {
    '/.netlify': {
      target: 'http://localhost:9000',
      pathRewrite: { '^/.netlify/functions': '' }
    }
  }
}
