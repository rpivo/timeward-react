import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const dev: webpack.Configuration = merge(common, {
  mode: 'production',
  plugins: [new BundleAnalyzerPlugin()],
});

export default dev;
