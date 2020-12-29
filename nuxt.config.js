import { BIconTruckFlatbed } from "bootstrap-vue";

export default {

  target: 'static',

  head: {
    title: 'BoutiquePlus',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    
  },

  css: [
    {src:'~/assets/css/global.css', lang: 'css'}
  ],

  router: {
    middleware: [
      'clearValidationErrors'
    ]
  },
  plugins: [
    './plugins/mixins/validation',
    './plugins/axios',
    './plugins/src/vuetify',
  ],

  components: true,

  buildModules: [
    ['@nuxtjs/vuetify', {rtl:true}],
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/pwa',
    '@nuxt/content'
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/login', method: 'post', propertyName: 'access_token'
          },
          user: {
            url: 'auth/me', method: 'get', propertyName: 'user'
          },
          logout: {
            url: 'auth/logout', method: 'get'
          }
        }
      }
    },
    redirect: {
      login: 'auth/login',
      home: '/'
    },
    plugins: [
    ]
  },
  axios: {
    baseURL: 'http://localhost:8000/api'
  },

  content: {},

  build: {
    extractCSS: true
  }
}
