var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: './app.js',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  resolve: {
    root: [path.join(__dirname, 'src')]
  },

  plugins: [],

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  devServer: {
    contentBase: './src'
  }
};