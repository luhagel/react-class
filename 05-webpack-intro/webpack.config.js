module.exports = {
  context: __dirname + "/src/client/app",
  entry: {
    javascript: "./index.js",
    html: "./index.html"
  },

  output: {
    filename: "bundle.js",
    path: __dirname + "/src/client/public",
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      }
    ],
  },
}
