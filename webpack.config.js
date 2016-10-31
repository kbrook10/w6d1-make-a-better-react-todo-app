module.exports = {
  entry: {
    global: './js/global.js', //These react on left and right should be the same
  },
  output: {
    path: './js/',
    publicPath: '/js/',
    filename: '[name].bundle.js', //This matches the react from the entry section above...
  },
  devServer: {
    inline: true,
    port: 8080,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
