const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'alphavantage',
    libraryTarget: 'umd'
  },
  target: 'web',
  mode: 'development',
  node: {
    fs: 'empty'
  }
};
