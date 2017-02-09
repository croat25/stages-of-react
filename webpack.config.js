const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack');
const path=require('path');

const config = {
  	entry: './src/App.js',
	output:{
		path:path.resolve(__dirname,"firstapp"),
		filename:'myfirstwepback.bundle.js'
	},
	module:{
		rules:[
		{test:'/\.(js|jsx)$/',exclude:'/node_modules/',loader :'babel-loader'}
		]
	},
	plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;