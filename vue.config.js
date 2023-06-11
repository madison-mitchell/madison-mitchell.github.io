const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio-2023/'
    : '/',
  configureWebpack: {
    resolve: {
      fallback: {
        fs: false, // or require.resolve('browserify-fs')
        path: require.resolve('path-browserify'),
      },
    },
  },
});