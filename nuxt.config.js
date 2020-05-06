const environment = process.env.NODE_ENV || 'dev'
const apiKey = process.env.API_KEY || 'apiKey'
const adsenseId = process.env.ADSENSE_ID || 'adsenseId'
import constant from './config/constant.json'
import { getAllPath } from './plugins/cms'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: constant.TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: constant.KEYWORD },
      {
        hid: 'description',
        name: 'description',
        content: constant.DESCRIPTION
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${constant.URL}/ogimage.png`
      },
      { hid: 'og:title', property: 'og:title', content: constant.TITLE },
      { hid: 'og:url', property: 'og:url', content: constant.URL },
      {
        hid: 'og:description',
        property: 'og:description',
        content: constant.DESCRIPTION
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'application-name',
        content: constant.APPLICATION_NAME
      },
      {
        name: 'apple-mobile-web-app-title',
        content: constant.APPLICATION_NAME
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
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/google-adsense',
      {
        id: adsenseId
      }
    ]
  ],

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
  },

  /*
  ** generateオプション
  */
  generate: {
    async routes() {
      return getAllPath()
    }
  },

  /*
  ** sitemap作成オプション
  */
  sitemap: {
    path: '/sitemap.xml',
    hostname: constant.URL,
    generate: true,
    exclude: ['/contact', '/404'],
    routes() {
      return getAllPath()
    }
  }
}
