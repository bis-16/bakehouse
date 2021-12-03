//const config = {}
//module.exports = config
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}

module.exports = {
    context: path.resolve(__dirname,'src'),
    mode: "development",//or production
    entry: {
        main: './js/index.js' //откуда вебпаку начинать
        //analytics: ''
    },
    output: {//куда складывать результаты работы вебпака
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist')
    },
    "resolve": {
        "alias": {
            '@img': path.resolve(__dirname, 'src/img'),
            "@js": path.resolve(__dirname, 'src/js'),
            "@": path.resolve(__dirname, 'src'),
        },
    },
    optimization: optimization(),
    devServer: {
        port: 4027,
        open: true,
        hot: isDev
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace:isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/img'),
                    to: path.resolve(__dirname, 'dist/img')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                    loader: MiniCssExtractPlugin.loader,
                    options:
                        {
                        // hmr: isDev,
                        // reloadAll: true,
                        },
                    },
                    'css-loader'
                ]
                //use: ['style-loader','css-loader'] //css-loader   позволяет импортировать css в js
                                                     //style-loader добавляет стили в html в секцию head
            },
            {
              //  test: /\.(jpg|png|svg|jpeg|gif)$/,
              //  use: ['file-loader'],
                //type: 'img'
            },
             // {
             //     test: /\.html$/,
             //     use: 'html-loader'
             // },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // hmr: isDev,
                            // reloadAll: true
                        },
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },

        ]
    }
}