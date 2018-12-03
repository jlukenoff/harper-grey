const path = require('path');

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
  optimization: { minimize: true },
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
    ],
  },
};
