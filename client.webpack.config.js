const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ENTRY_POINT = path.resolve(__dirname, 'client/index.jsx');

const OUTPUT_DIR = path.resolve(__dirname, 'public');

module.exports = {
  entry: ENTRY_POINT,
  output: {
    filename: 'bundle.js',
    path: OUTPUT_DIR,
    publicPath: '/',
  },
  devtool: 'source-map',
  mode: 'development',
  resolve: { extensions: ['.js', '.jsx', '.css'] },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react', 'airbnb'],
        },
      },
      {
        test: /\.svg$/,
        use: [
          'babel-loader',
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [{ removeTitle: false }],
                floatPrecision: 2,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]--[local]--[hash:base64:8]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'main.css',
      chunkFilename: 'main.css',
    }),
  ],
};
