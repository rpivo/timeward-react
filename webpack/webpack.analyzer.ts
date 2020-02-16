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
  plugins: [new BundleAnalyzerPlugin()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({})],
  },
};

export default analyzer;
