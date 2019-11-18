const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js_finish.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },{
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};