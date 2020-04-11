import { EnvironmentPlugin } from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import path from 'path';

const __dirname = path.resolve();
const dev = {
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'dist/dev'),
    historyApiFallback: true,
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
  plugins: [new EnvironmentPlugin({ NODE_ENV: 'test' })],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({})],
  },
};

export default dev;
