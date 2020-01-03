const { resolve } = require('path');

const base = {
	entry: './index.js',
	mode: "development"
}

const browser = {
	...base,
	output: {
		path: resolve(__dirname, 'dist/browser'),
		filename: "[name].js",
		library: 'alphavantage',
		libraryTarget: 'umd'
	},
	target: 'web',
	node: {
		fs: 'empty'
	}
};

const node = {
	...base,
	output: {
		path: resolve(__dirname, "dist/node"),
		filename: "[name].js"
	},
	target: "node"
}

module.exports = [ node, browser ]
