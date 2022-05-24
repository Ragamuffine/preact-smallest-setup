const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: './',
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
    ],
    optimization: {
        minimize: false,
    },
    devtool: "source-map",
    resolve: { 
	alias: { 
	    "react": "preact/compat",
	    "react-dom/test-utils": "preact/test-utils",
	    "react-dom": "preact/compat",
	    "react/jsx-runtime": "preact/jsx-runtime"
	},
    }
};
