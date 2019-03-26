/**
 * Copyright (C) oxidio. See LICENSE file for license details.
 */
const path = require('path');

module.exports = {
  output: {
    filename: "module-pim.js",
    path: path.resolve(__dirname, 'source/out/admin/src/oxidio')
  },
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
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  }
};
