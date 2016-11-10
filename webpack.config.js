/*
 * imports
 */
const merge = require('webpack-merge');
const path = require('path');
const validate = require('webpack-validator');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


/*
 * global variables
 */
const TARGET = process.env.npm_lifecycle_event;
const ENABLE_POLLING = process.env.ENABLE_POLLING;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  test: path.join(__dirname, 'tests'),
};

process.env.BABEL_ENV = TARGET;


/*
 * common options used in all configs
 */
const common = {
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    publicPath: '/vili-react/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: [PATHS.app, PATHS.test],
      },
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app,
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: [PATHS.app, PATHS.test],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      title: 'Vili',
      appMountId: 'app',
      inject: false,
    }),
  ]
};

let config;


/*
 * dev config [default]
 */
if(TARGET === 'start' || !TARGET) {
  config = merge(common, {
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT,
    },
    devtool: 'eval-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multiStep: true,
      }),
    ],
  });
}


/**
 * test config
 */
if(TARGET === 'test') {
  config = merge(common, {
    devtool: 'inline-source-map',
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
            loaders: ['babel?cacheDirectory'],
            include: PATHS.test
        }
      ]
    }
  });
}


/*
 * prod config
 */
if(TARGET === 'build') {
  config = merge(common, {});
}


/*
 * export config
 */
module.exports = validate(config, {
  quiet: true,
});
