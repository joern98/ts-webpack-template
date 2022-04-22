const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	performance: {
		hints: false,
	},
	output: {
		clean: true,
	},
	optimization: {
		minimize: true,
	},
});
