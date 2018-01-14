const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const env = process.env.NODE_ENV

const plugins = []

plugins.push(new webpack.DefinePlugin({
	"process.env.NODE_ENV": JSON.stringify(env)
}))
plugins.push(new LiveReloadPlugin({
	appendScriptTag: true
}))
//将<LiveReload>的script自动加入<head>中)
//代码丑化 生产环境
if (env === 'prd') {
	plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
	)
	plugins.push(new OptimizeCssAssetsPlugin({
		assetNameRegExp: /\.css$/g,
		cssProcessor: require('cssnano'),
		cssProcessorOptions: {
			discardComments: {
				removeAll: true
			}
		},
		canPrint: true
	}))
}

plugins.push(new webpack.optimize.CommonsChunkPlugin({
	name: 'vendor',
	filename: 'public/script/common/vendor-[hash:5].min.js'
}))
plugins.push(new ExtractTextPlugin("public/css/[name]-[hash:5].css"))
/*plugins.push(
	new HtmlWebpackPlugin({ // Also generate a test.html 
		filename: './views/layout.html',
		template: 'src/widget/layout.html',
		inject: false,
	})
)*/
plugins.push(
	new HtmlWebpackPlugin({ // Also generate a test.html 
		filename: './views/index.html',
		template: 'src/views/index.html',
		inject: false
	})
)
/*plugins.push(
	new HtmlWebpackPlugin({
		filename: './widget/index.html',
		template: 'src/widget/index.html',
		inject: false
	})
)*/

module.exports = {
	entry: {
		tags: path.join(__dirname, './src/index.jsx'),

	},
	output: {
		path: path.join(__dirname, './build'),
		filename: 'public/script/[name].[hash:8].js'
	},
	module: {
		rules: [{
			test: /\.(jsx|js)$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}
		}, {
			test: /\.css$/,
			exclude: /node_modules/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader"
			})
		}]
	},
	plugins
}