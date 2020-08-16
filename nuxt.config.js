import dateTimeFormats from './i18n/dateTimeFormats'
import messages from './i18n/messages'
import Storyblok from './storyblok-client'

export default {
  target: 'static',
  mode: 'universal',
  components: true,
  /*
   ** Headers of the page
   */
  head: {
    title: 'Jérémy Riverain - Developer',
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
        content:
          'Jérémy Riverain, fullstack developer. Making websites, APIs, PWAs, mobile apps. Working a lot with PHP, Symfony, JS, Vuejs'
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
      src: '~/node_modules/highlight.js/styles/night-owl.css',
      lang: 'css'
    },
    '~/assets/main.sass'
  ],
  styleResources: {
    sass: './assets/vars/*.sass'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vuelidate.js', '@/plugins/vue-lazyload.js',  '@/plugins/storyblok-api.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources'
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
    '@nuxtjs/sitemap' // If you use other modules (eg. nuxt-i18n), always declare the sitemap module at end of array
  ],
  markdownit: {
    injected: true,
    breaks: true,
    use: ['markdown-it-highlightjs']
  },
  sitemap: {
    hostname: process.env.BASE_URL,
    routes: async () => {
      const { data } = await Storyblok.get('cdn/stories', {
        token: process.env.STORYBLOK_ACCESS_TOKEN,
        version: 'published',
        starts_with: 'posts/',
        sort_by: 'first_published_at:desc'
      })

      return data.stories.map((story) => `${story.full_slug}`)
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
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
  }
}
