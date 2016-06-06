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

  externals: {
    appData: '__APP_DATA__'
  },

  plugins: [],

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'
      },
      {
        test: /\.(eot|png|jpg|svg|woff|woff2|ttf)(\?.*)?$/,
        loader: 'file'
      }
    ]
  },

  devServer: {
    contentBase: './src'
  }
};