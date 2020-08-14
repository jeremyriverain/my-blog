import dateTimeFormats from './i18n/dateTimeFormats'
import messages from './i18n/messages'

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
  plugins: ['@/plugins/vuelidate.js'],
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
      'storyblok-nuxt',
      {
        accessToken: 'SIHeh8yM8kQ1OXnnDmNbLQtt',
        cacheProvider: 'memory',
        customParent: 'YOUR_URL_WHERE_RUN_STORYBLOK_APP' // optional https://www.storyblok.com/docs/Guides/storyblok-latest-js#storyblokinitconfig
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
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
		'@nuxtjs/sitemap' // If you use other modules (eg. nuxt-i18n), always declare the sitemap module at end of array
  ],
  markdownit: {
    injected: true,
    breaks: true,
    use: ['markdown-it-highlightjs']
  },
  sitemap: {
    hostname: process.env.BASE_URL
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
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
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
