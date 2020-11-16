const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ip = require("ip");
const hostname = ip.address() || "localhost";

module.exports = {
  entry: "./src/index",
  output: { path: path.join(__dirname, "/dist"), filename: "bundle.js" },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "./build"),
    publicPath: "/",
    host: `${hostname}`,
    port: 3020,
    hot: true,
    inline: true,
    contentBase: "./",
    watchOptions: {
      poll: true,
    }, 
    compress: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader' 
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
};