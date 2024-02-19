const path = require("path");
module.exports = {
  entry: "./src/resizingwindow.js",
  output: {
    filename: "resize.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "auto",
  },
  mode: "none",
  module: {
    rules: [
      {
        type: "asset",
        test: /\.(png|jpg)$/,
        parser: {
          dataUrlCondition: {
            maxSize: 12 * 1024,
          },
        },
      },
      {
        type: "asset/source",
        test: /\.(txt)$/,
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader" ,"sass-loader"],
      },
    ],
  },
};
