const path = require('path');

module.exports = {
  entry: './js/main.js',
  sourceType: module,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'output.js',
  },
  watch: true
};