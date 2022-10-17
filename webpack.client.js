// webpack.server.js
const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

module.exports = merge(baseConfig, {
  mode: "development",
  entry: "./src/client/index.tsx",
  target: "web", // Compile for usage in a browser-like environment (default)
  output: {
    filename: "index.js",
    path: path.resolve(process.cwd(), "client_build"),
  },
});
