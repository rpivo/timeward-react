import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common';

const prod: webpack.Configuration = merge(common, {
  mode: 'production',
});

export default prod;