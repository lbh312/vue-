module.exports = {
  devServer: {
    // overlay: {
    //   warnings: false,
    //   errors: false
    // },
    proxy: {
      '/kerwin': {
        target: 'http://m.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/kerwin': ''
        }
        /*
          反向代理使用非常广，解决前后端跨域问题
          /kerwin/ajax/comingList ==>/ajax/comingList
          用正则将Child.vue组件中自定义kerwin变成空，不显示，
          有时候有些数据需要反向代理，有时候不需要，记得要试
        */
      }
    }
  }
  // lintOnSave: true // 关了eslint检查
}
