const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Точка входу
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Вихідна папка
        clean: true, // Очищення dist перед кожним запуском
    },
    module: {
        rules: [
            {
                test: /\.(jpg|jpeg|png|gif|svg|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name].[hash][ext][query]',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/pages/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/rozklad.html',
            filename: 'rozklad.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/news.html',
            filename: 'news.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/photo.html',
            filename: 'photo.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets/images', to: 'assets/images' },
            ],
        }),
    ],
    mode: 'development',
    devServer: {
        open: true,
        port: 8080,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
    },
};
