const apiKey = process.env.API_KEY || 'apiKey'
const constant = require('./config/constant.json')

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
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
    { src: '~/plugins/axios.js' },
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
    API_KEY: apiKey,
    CONSTANT: constant
  }
}
