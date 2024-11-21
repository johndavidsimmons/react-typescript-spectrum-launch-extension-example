const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'src/view/dataElements'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][hash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'fonts',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/view/ViewTemplate1.html',
      filename: 'truthyChain.html',
      inject: 'body',
      templateParameters: {
        title: 'Truthy Chain Data Element',
      },
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src/view/dataElements'), // Serve from this directory
    },
    port: 3001,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    watchFiles: [
      'src/**/*.js',
      'src/**/*.ts',
      'src/**/*.tsx',
      'src/view/dataElements/**/*.html',
    ],
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, 'images'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
