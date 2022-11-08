const path = require('path');

module.exports = {
  entry: './js/main.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'output.js',
  },
  watch: true
};