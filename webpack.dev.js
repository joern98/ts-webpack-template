const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

const BUILD_DIR = 'dist';

module.exports = merge(common, {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, BUILD_DIR),
		},
		hot: true,
	},
});
