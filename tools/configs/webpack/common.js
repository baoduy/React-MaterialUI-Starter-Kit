// shared config (dev and prod)
const { resolve } = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"]
  },
  context: resolve(__dirname, "../../../src"),
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
        test: /\.(jpe?g|png|gif)$/i,
        use: ["file-loader?name=img/[name].[ext]", "img-loader"]
      },
      {
        test: /\.(svg)$/i,
        use: ["url-loader?mimetype=image/svg+xml", "img-loader"]
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
      },
      //copy Web config file to dist folder
      {
        test: /web.config/,
        loader: "file-loader?name=[name].[ext]"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html.ejs",
      favicon: "favicon.ico"
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
