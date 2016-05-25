var webpack = require('webpack'),
  baseonfig = require('./webpack.config');

var config = Object.create(baseonfig);

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
);

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  })
);

module.exports = config;
