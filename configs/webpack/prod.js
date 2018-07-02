// production config
const merge = require("webpack-merge");
const { resolve } = require("path");

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: ["babel-regenerator-runtime", "./index.jsx", "../web.config"],
  devtool: "", //"source-map", source map for testing only so disable it in PRD
  output: {
    filename: "js/bundle.min.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: "/"
  },
  plugins: []
});
