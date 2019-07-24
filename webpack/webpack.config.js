const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    //入口文件配置
    entry:{
        index:"./src/index.js",
    },
    //出口文件配置
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:'[name].js',
    },
    module:{
        //规则数组
        rules:[
            {
                //正则表达式检测所有css文件
                test:/\.css$/,
                //文件分离
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                    publicPath:"../"
                  })
            },
            //css图片
            {
                test:/\.(jpg|png|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:300,
                        outputPath:"image/"
                    }
                }]
            },
            //html img图片
            {
                test:/\.html$/,
                loader:'html-withimg-loader'
            }
        ]
    },
    //插件
    plugins:[
        //css文件分离后位置
        new ExtractTextPlugin("css/index.css"),
        new HtmlWebpackPlugin({
            //去掉双引号
            minify:{
                removeAttributeQuotes:true
            },
            //避免缓存js
            hash:true,
            //目标文件
            filename:'index.html',
            //配置文件路径和文件名
            template:'src/index.html'
        })
    ],
    //webpack开发服务功能
    devServer:{
        //设置目录
        contentBase:path.resolve(__dirname,"dist"),
        //服务器IP地址
        host:"localhost",
        //服务端压缩是否开启
        compress:true,
        //服务器端口号
        port:"8081"
    }
}