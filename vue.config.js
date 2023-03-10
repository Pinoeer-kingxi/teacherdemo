const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  filenameHashing: true,
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    https: false,
    open: false,
    proxy: {
      '/api': {
        target: 'http://后端地址',
        ws: true,
        secure: false,
        changeOrigin: true
      },
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '优秀教师成长平台'
        return args
      })
  }
})
