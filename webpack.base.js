/*
 * @Author: KazooTTT wangyijin1999@qq.com
 * @Date: 2022-10-18 00:31:10
 * @LastEditors: KazooTTT wangyijin1999@qq.com
 * @LastEditTime: 2022-10-24 21:51:39
 * @FilePath: /ssr-server-study/webpack.base.js
 * @Description:
 *
 */
// webpack.base.js
const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  module: {
    rules: [
      // babel js
      {
        test: /.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      // ts-loader ts
      {
        test: /.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
  plugins: [new NodePolyfillPlugin()],
};
