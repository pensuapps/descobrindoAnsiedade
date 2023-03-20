const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },

  pwa: {
    name: 'Descobrindo a ansiedade',
    short_name: 'Descobrindo a ansiedade',
    themeColor: '#521ba6',
    msTileColor: '#521ba6',
    background_color: '#521ba6',
    appleMobileWebAppStatusBarStyle: '#521ba6',
    manifestOptions: {
      background_color: '#521ba6',
    },
  },
})
