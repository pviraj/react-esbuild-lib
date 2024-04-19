const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/
      //   exclude: /node_modules/,
      //   use: ['babel-loader']
      // }
      // Use esbuild to compile JavaScript & TypeScript
      {
        // Match `.js`, `.jsx`, `.ts` or `.tsx` files
        test: /\.[jt]sx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
          // JavaScript version to compile to
          target: 'es2015'
        }
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      process: 'process/browser'
    }
  },
  plugins: [
    //create HTML file that includes reference to bundled js
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  devServer: {
    open: true,
    hot: true
  }
};