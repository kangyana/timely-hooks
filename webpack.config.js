const path = require('path');

module.exports = {
  entry: './es/index.js',
  output: {
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  mode: 'production',
  resolve: {
    extensions: ['.json', '.js'],
  },
  externals: [
    {
      react: 'React',
    },
  ],
  output: {
    filename: 'timelyhooks.js',
    library: 'timelyhooks',
    path: path.resolve(__dirname, './dist'),
  },
};
