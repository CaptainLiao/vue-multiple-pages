//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
    },
    plugins: [
      //new BundleAnalyzerPlugin()
    ]
  },

  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: './src/scss/_vars.scss'
        })
        .end()
    })
  },

  // pages: {
  //   about: {
  //     entry: 'src/views/about-main.js',

  //     //chunks: ['chunk-vendors', 'chunk-common', 'about']
  //   },
  //   'home/home': {
  //     entry: 'src/views/home/_entry.js',

  //     //chunks: ['chunk-vendors', 'chunk-common', 'home/home']
  //   },
  // }

}
