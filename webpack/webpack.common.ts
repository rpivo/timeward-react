import webpack from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const common: webpack.Configuration = {
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
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({})],
  },
};

export default common;
