const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlWebPackPlugin = require('html-webpack-plugin');

const outputPath = path.join(__dirname, "dist")
const port = process.env.PORT || 3000;

module.exports = {
	context: __dirname,
	entry: ['babel-polyfill', './src/index.js'],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		modules: ['node_modules', './src'],
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: "babel-loader?presets[]=es2015",
				exclude: [
					path.resolve(__dirname, 'node_modules')
				],
				options:{
					plugins: ['transform-runtime']
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader', use: ["css-loader","sass-loader"]
				}),
			},
			{
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg|jpe?g|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
		]
	},
	plugins: [
		new ExtractTextPlugin("style.css")
		// new HtmlWebPackPlugin({
        //     template: "./public/index.html",
        //     filename: "./index.html"
        // })
	],
	devServer: {
		port,
		historyApiFallback: true,
		publicPath: '/dist/',
	}
}