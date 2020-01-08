import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common';
import path from 'path';

const __dirname = path.resolve();

const dev: webpack.Configuration = merge(common, {
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'dist/dev'),
    hot: true,
    open: true,
    port: 9000,
  },
  devtool: 'source-map',
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  mode: 'development',
});

export default dev;
