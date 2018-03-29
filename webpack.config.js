const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'app.js',
    path: __dirname + './dist',
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader/url' },
          { loader: 'file-loader' }
        ]
      },
      {
        test: /\.ts$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true
  }

}