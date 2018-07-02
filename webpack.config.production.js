const webpack = require('webpack');
const merge = require('webpack-merge');
// const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const webpackCommonConfig = require('./webpack.config.common');

module.exports = merge(webpackCommonConfig, {
	devtool: 'cheap-module-eval-source-map',
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			minimize: true,
			sourceMap: true
		}),
		// new optimizeCssAssetsPlugin(),
		new webpack.EnvironmentPlugin({ NODE_ENV: 'production' }),
	]
});
