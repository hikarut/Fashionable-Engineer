const environment = process.env.NODE_ENV || 'dev'
const apiKey = process.env.API_KEY || 'apiKey'
const constant = require('./config/constant.json')
const defaultTitle = 'Fashionable Engineer'
const defaultKeyword =
  'エンジニア,ファッション,コーディネート,服装,おしゃれ,天気,気温,ファッショナブルエンジニア'
const defaultDescription =
  'エンジニアの日々のコーディネートを投稿します。その日の天気と気温も合わせて載せているので季節感の参考にして頂ければと思います。'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: defaultTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: defaultKeyword },
      {
        hid: 'description',
        name: 'description',
        content: defaultDescription
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: defaultDescription
      },
      { hid: 'og:image', property: 'og:image', content: '/ogimage.png' },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:image:src',
        property: 'twitter:image:src',
        content: `/ogimage.png`
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#0a0716', height: '5px' },
  /*
  ** Global CSS
  */
  css: [{ src: '~assets/css/main.scss', lang: 'scss' }],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/ga.js', mode: 'client' },
    { src: '~/plugins/lazyload.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios'],

  styleResources: {
    scss: ['~/assets/css/common.scss']
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
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  },

  /*
  ** env
  */
  env: {
    ENVIRONMENT: environment,
    API_KEY: apiKey,
    CONSTANT: constant
  }
}
