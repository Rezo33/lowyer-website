let path = require('path');
let ImageminPlugin = require('imagemin-webpack-plugin').default;
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');


let conf ={
    entry:'./src/jsx/index.jsx',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: "index.js",
        publicPath: "build/",
    },
    stats: {
        assets: false,
        children: true,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: true,
        timings: true,
        version: false,
        warnings: false,
        optimizationBailout: true,
        colors: {
            green: '\u001b[32m',
        }
    },
    devServer: {
        overlay:true,
        stats: {
            assets: false,
            children: true,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: true,
            timings: true,
            version: false,
            warnings: false,
            optimizationBailout: true,
            colors: {
                green: '\u001b[32m',
            }
        }
    },
    module:{
        rules:[
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },{
                test: /\.scss$/,
                use:
                    [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {publicPath: './'}
                        },
                        {
                            loader: "css-loader",
                            options: {url: false}
                        },
                        {loader: "postcss-loader"},
                        {loader: "sass-loader"}
                    ]
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, './'),
                use: ['raw-loader']
            },{
                test: /\.(woff(2)?|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /(node_modules)/,
                loader: 'file-loader',
                options:{
                    name: '[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: false,
            template: './index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css',
            chunkFilename: '[name].css'
        }),
        new CopyWebpackPlugin([
            { from: './src/img', to: 'img/' },
            { from: './src/scss/fonts', to: 'fonts/' },
        ]),
        new ImageminPlugin({
            disable: process.env.NODE_ENV !== 'production',
            pngquant: {
                quality: '95-100'
            }
        })
    ]
};

module.exports = (env, options) =>{
    let production = options.mode === 'production';

    conf.devtool = production
        ? false
        : 'eval-sourcemap';
    return conf;
};