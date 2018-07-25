const path = require('path');
const webpack = require('webpack');

const TypedocWebpackPlugin = require('typedoc-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.WatchIgnorePlugin([
      /\.js$/,
      /\.d\.ts$/
    ]),
    new TypedocWebpackPlugin({}),
    new MomentLocalesPlugin(),
    new PeerDepsExternalsPlugin(),
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'winco-common.js',
    library: 'wincoCommon',
    path: path.resolve(__dirname, 'dist'),
    pathinfo: true
  },
};
