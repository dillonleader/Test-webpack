const path = require('path')
const webpack = require('webpack')
const webhtml = require('html-webpack-plugin')
const config = {
	entry: path.resolve(__dirname, 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		open: true,
		port: 3000,
		hot: true,
		contentBase: 'src'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webhtml({
			template: path.join(__dirname, './src/index.html'),
			filename: 'index.html'
		}),
	],

}
module.exports = config
