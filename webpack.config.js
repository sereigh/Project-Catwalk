const path = require('path');

const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  plugins: [new ESLintPlugin({
    extensions: ['js', 'jsx', 'png']
  })],
};
