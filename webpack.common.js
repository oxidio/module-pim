/**
 * Copyright (C) oxidio. See LICENSE file for license details.
 */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  output: {
    filename: "module-pim.js",
    path: path.resolve(__dirname, 'source/out/admin/src/oxidio')
  },
  plugins: [
      new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: "/node_modules/"
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
            publicPath: '../out/admin/src/oxidio/fonts/',
          }
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
};
