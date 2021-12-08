module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/icamping/' : '/',
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import '~bootstrap/scss/functions';
          @import '@/style/custom/_variables';
          @import '~bootstrap/scss/variables';
          @import '~bootstrap/scss/mixins';
          @import '~bootstrap/scss/utilities';
        `
      }
    }
  }
}
