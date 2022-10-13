// webpack configs for server side render(ssr)
const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.base");

const config = {
  mode: "development",
  entry: "./src/ssr/index.tsx",
  target: "node", // ssr, running on node
  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "server_build"),
  },
};

module.exports = merge(commonConfig, config);
