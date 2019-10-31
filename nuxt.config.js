/*
 ** 環境変数ファイル読み込み
 */
const envSet = require(`./env/${process.env.NODE_ENV}.js`)

/*
 ** 動的ルート生成
 */
const { homes } = require(`./src/assets/scripts/home.routes.js`)
const { categories, tags } = require(`./src/assets/scripts/search.routes.js`)
const { articles } = require(`./src/assets/scripts/article.routes.js`)
const routes = [...homes, ...categories, ...tags, ...articles]

export default {
  mode: 'universal',

  srcDir: 'src/',

  router: {
    base: process.env.NODE_ENV === 'production' ? '/<repository-name>/' : '/'
  },

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: `%s | ${envSet.title}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: envSet.description
      },

      // OGP 設定
      { hid: 'og:site_name', property: 'og:site_name', content: envSet.title },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: envSet.baseUrl },
      { hid: 'og:title', property: 'og:title', content: envSet.title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: envSet.description
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${envSet.baseUrl}/icon.png`
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `${envSet.baseUrl}/favicon.ico`
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/styles/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    [
      '@nuxtjs/google-analytics',
      {
        id: '<UA-xxxxxxxxx-x>'
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/markdownit',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  /*
   ** 環境変数
   */
  env: envSet,

  /*
   ** 動的ページの404対策
   */
  generate: {
    routes
  },

  /*
   ** サイトマップ設定
   */
  sitemap: {
    path: '/sitemap.xml',
    hostname: envSet.baseUrl,
    routes(callback) {
      callback(null, routes)
    }
  },

  /*
   ** Vuetify 設定
   */
  vuetify: {
    optionsPath: '~/assets/scripts/vuetify.options.js'
  },

  /*
   ** Markdownit 設定
   */
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    html: true,
    typegraphy: true,
    injected: true,
    use: ['markdown-it-attrs']
  }
}
