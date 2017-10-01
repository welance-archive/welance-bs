module.exports = {
  parser: 'postcss-scss',
  plugins: {
    // 'postcss-import': {},
    // 'postcss-cssnext': {},
    'autoprefixer': {browsers : "last 2 versions"},
    'cssnano': {
      "preset": [
        "default",
        {"discardComments": {"removeAll": true}}
      ]
    }
    // 'postcss-import': { root: file.dirname },
    // 'postcss-cssnext': options.cssnext ? options.cssnext : false,
    // 'autoprefixer': env == 'production' ? options.autoprefixer : false,
    // 'cssnano': env === 'production' ? options.cssnano : false
  }
}

