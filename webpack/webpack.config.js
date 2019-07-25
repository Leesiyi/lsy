const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require("glob");
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = {
    //入口文件配置
    entry: {
        index: "./src/index.js",
    },
    //出口文件配置
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
    },
    //模块
    module: {
        //规则数组
        rules: [
            {
                //正则表达式检测所有css文件
                test: /\.css$/,
                //文件分离
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: { importLoaders: 1 }
                    }, 'postcss-loader'],
                    publicPath: "../"
                })
            },
            //css图片
            {
                test: /\.(jpg|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 300,
                        outputPath: "image/"
                    }
                }]
            },
            //html img图片
            {
                test: /\.html$/,
                loader: 'html-withimg-loader'
            },
            //sass
            {
                //匹配sass
                test: /\.scss/,
                //sass文件分离
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "sass-loader"
                    ]
                })
            },
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }],
                exclude: /node_modules/
            }
        ]
    },
    //插件
    plugins: [
        //清除未使用css

        //css文件分离后位置
        new ExtractTextPlugin("css/index.css"),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        }),
        //解析html插件
        new HtmlWebpackPlugin({
            //去掉双引号
            minify: {
                removeAttributeQuotes: true
            },
            //避免缓存js
            hash: true,
            //目标文件
            filename: 'index.html',
            //配置文件路径和文件名
            template: 'src/index.html'
        })
    ],
    //webpack开发服务功能
    devServer: {
        //设置目录
        contentBase: path.resolve(__dirname, "dist"),
        //服务器IP地址
        host: "localhost",
        //服务端压缩是否开启
        compress: true,
        //服务器端口号
        port: "8081"
    }
}