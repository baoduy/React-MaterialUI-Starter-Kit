// shared config (dev and prod)
const { resolve } = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
//const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"]
  },
  context: resolve(__dirname, "../../src"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      },
      // {
      //   test: /\.scss$/,
      //   loaders: [
      //     'style-loader',
      //     {loader: 'css-loader', options: {importLoaders: 1}},
      //     'postcss-loader',
      //     'sass-loader',
      //   ],
      // },
      {
        rules: [
          {
            test: /\.less$/,
            use: [
              {
                loader: "style-loader" // creates style nodes from JS strings
              },
              {
                loader: "css-loader" // translates CSS into CommonJS
              },
              {
                loader: "less-loader" // compiles Less to CSS
              }
            ]
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=img/[name].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false"
        ]
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]"
        }
      },
      {
        test: /\.(woff|woff2)$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?mimetype=application/octet-stream"
      }
      // {
      //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: "url-loader?mimetype=image/svg+xml"
      // },
      // {
      //   test: /\.svg$/,
      //   exclude: '/node_modules/',
      //   loader: 'babel-loader!svg-react-loader'
      // }
    ]
  },
  plugins: [
    // new CopyWebpackPlugin([{
    //   from: './assets/img',
    //   to: __dirname + '/dist/assets/img'
    // }]),
    new HtmlWebpackPlugin({
      template: "index.html.ejs"
    }),
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom"
    })
  ],
  externals: {
    React: "react",
    ReactDOM: "react-dom"
  },
  performance: {
    hints: false
  }
};
