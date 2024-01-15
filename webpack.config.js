const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/scripts/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer:{
        static: './dist',
        port: 8080,
        watchFiles: ['src/**/*.html', 'src/**/*.css', 'src/**/*.js'],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader','css-loader',
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'assets/images',
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]

}