const { model } = require('mongoose');
const path = require('path');

module.exports = {
    mode:'development',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                    loader: 'babel-loader',
            }
        ]
    }
}