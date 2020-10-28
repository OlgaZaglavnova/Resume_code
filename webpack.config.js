const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
//const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true,
            },
          },
        },
      },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "index.js"
    },
    resolve: {
        modules: ['node_modules', 'src', 'components'],
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        historyApiFallback: true,
    },
    devtool: "inline-source-map",
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve (__dirname, "src"),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/env', "@babel/react"],
                    plugins: [
                        ["@babel/plugin-proposal-class-properties", { "loose": true }]
                    ]
                },
            },
            {
                test: /\.css$/i,
                // use: ['style-loader', 'css-loader'],
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                // loader: "style!css"
                //loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
                //loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
                // use: [{loader: MiniCssPlugin.loader,
                //         options: {
                //             publicPath: path.resolve(__dirname, "dist"),
                //             hmr: process.env.NODE_ENV === 'development'
                //         }
                //     }, 'style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                  name(file) {
                    if (process.env.NODE_ENV === 'development') {
                      return '[path][name].[ext]';
                    }
      
                    return '[contenthash].[ext]';
                  },
                },
               },
        ],
    },
    plugins:[
        new HTMLWebpackPlugin({template: path.resolve(__dirname, "src", "index.html")}),
        new MiniCssExtractPlugin({
            filename: '[name].css',
          }),
        //new ExtractTextPlugin(path.resolve(__dirname, "src", "style.css")),
        //new MiniCssPlugin({filename: 'style/[name].css', chunkFileName: '[id].css'}),
        //new ExtractTextPlugin(path.resolve(__dirname, "src", 'style.css'))
    ]
}