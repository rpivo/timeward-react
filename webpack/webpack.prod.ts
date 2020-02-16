import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import path from 'path';

const __dirname = path.resolve();

const prod = {
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts(x?)$/,
        use: [{ loader: 'ts-loader' }],
      },
      {
        enforce: 'pre',
        loader: 'source-map-loader',
        test: /\.js$/,
      },
    ],
  },
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
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({})],
  },
};

export default prod;
