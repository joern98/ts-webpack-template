const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const BUILD_DIR = 'dist';

module.exports = {
	entry: './src/app.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, BUILD_DIR),
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: '**/*.html',
					context: './src',
				},
			],
		}),
	],
	optimization: {
		splitChunks: {
			chunks: 'all',
			name: false,
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					enforce: true,
					chunks: 'all',
				},
			},
		},
	},
};
