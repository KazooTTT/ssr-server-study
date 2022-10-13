// common webpack configs(to merge to different webpack configs)
const path = require("path");

module.exports = {
  module: {
    rules: [
      // js - babel
      {
        test: /.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      // ts - ts-loader
      {
        test: /.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
};
