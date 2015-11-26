var config = {
	context: './src',
	entry: {
		main1: 'main1.js',
		main2: 'main2.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: './dist',
		publicPath: '/pub',
		libraryTarget: 'amd'
	},
	externals: {
		jquery: 'jquery',
		backbone: 'backbone',
		underscore: 'underscore'
	},
	resolve: {
		root: './src'
	}
};

console.log(config);

module.exports = config;