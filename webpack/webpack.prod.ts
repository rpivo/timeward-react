import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common';
import path from 'path';

const __dirname = path.resolve();

const prod: webpack.Configuration = merge(common, {
  mode: 'production',
  optimization: {
    chunkIds: "named",
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          maxInitialRequests: 5,
          minChunks: 2,
          minSize: 0,
        },
        vendor: {
          chunks: "initial",
          enforce: true,
          name: "vendor",
          priority: 10,
          test: /node_modules/,
        },
      },
    },
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist/prod"),
    publicPath: '/',
  },
});

export default prod;
