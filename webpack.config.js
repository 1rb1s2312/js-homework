const path = require('path');

module.exports = {
  entry: './js/main.js',
  sourceType: module,
  output: {
    filename: 'output.js',
    path: path.resolve(__dirname, 'dist'),
  },
};