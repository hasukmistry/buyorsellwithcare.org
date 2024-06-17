const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	],
	resolve: {
		alias: {
			'@utils': path.resolve(__dirname, 'src/utils/'),
			'@config': path.resolve(__dirname, 'src/config/')
		}
	}
};
