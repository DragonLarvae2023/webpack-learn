const path = require("path");
module.exports = {
  entry: "./src/add-image.js",
  output: {
    filename: "output2.js",
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
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
