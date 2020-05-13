import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const analyzer = {
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
    chunkIds: 'named',
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          maxInitialRequests: 5,
          minChunks: 2,
          minSize: 0,
        },
        vendor: {
          chunks: 'initial',
          enforce: true,
          name: 'vendor',
          priority: 10,
          test: /node_modules/,
        },
      },
    },
  },
  plugins: [new BundleAnalyzerPlugin()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({})],
  },
};

export default analyzer;
