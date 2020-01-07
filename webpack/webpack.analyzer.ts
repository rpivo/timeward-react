import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const analyzer: webpack.Configuration = merge(common, {
  mode: 'production',
  plugins: [new BundleAnalyzerPlugin()],
});

export default analyzer;
