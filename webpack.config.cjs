const path = require("path");
module.exports = {
  entry: "./src/add-image.js",
  output: {
    filename: "output2.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "dist/"+path.resolve(__dirname, "img"),
  },
  mode: "none",
  module: {
    rules: [
      {
        type: "asset/resource",
        test: /\.(png|jpg)$/,
      },
      {},
    ],
  },
};
