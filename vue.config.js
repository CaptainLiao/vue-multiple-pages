module.exports = {
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
    },
  },

  pages: {
    about: {
      entry: 'src/views/about-main.js',

      //chunks: ['chunk-vendors', 'chunk-common', 'about']
    },
    'home/home': {
      entry: 'src/views/home/_entry.js',

      //chunks: ['chunk-vendors', 'chunk-common', 'home/home']
    },
  }

}