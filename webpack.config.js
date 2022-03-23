module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      /*{
        test: /\.svg/,
        type: "asset/resource",
      },*/
    ],
  },
  output: {
    clean: true,
  } /*
  /*plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/images/favicon.svg",
    }),
  ],*/,
};
