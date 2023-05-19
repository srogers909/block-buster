const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);
const host = process.env.HOST || 'localhost';
process.env.NODE_ENV = 'development';

module.exports = {
  mode: 'development',
  entry: resolveAppPath('src'),
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'index.bundle.js'
  },
  devServer: {
    port: 3000,
    compress: true,
    hot: true,
    host,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /nodeModules/,
        include: resolveAppPath('src'),
        loader: 'babel-loader',
        options: {
          presets: [
            require.resolve('babel-preset-react-app')
          ]
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      inject: true,
      template: resolveAppPath('./src/index.html')
    }), 
    new MiniCssExtractPlugin()
  ]
}