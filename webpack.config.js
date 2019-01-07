const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (env) => {
    const clientPath = path.resolve(__dirname, 'src/main/client');
    const outputPath = path.resolve(__dirname, 'src/main/resources/static');

    return {
        mode: !env ? 'development' : env,
        entry: {
            vendors: [ 'vue', 'vue-graph' ],
            app: clientPath + '/index.js'
        },
        output: {
            path: outputPath,
            filename: '[name].js'
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors'
                    }
                }
            },
            minimizer: [
                new TerserPlugin(),
                new OptimizeCssAssetsPlugin()
            ]
        },
        devServer: {
            contentBase: outputPath,
            publicPath: '/',
            host: '0.0.0.0',
            port: 90,
            proxy: {
                '**': 'http://127.0.0.1:80'
            },
            inline: true,
            hot: false
        },
        module: {
            rules: [{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader'
                }]
            }, {
                test: /\.(css)$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' }
                ]
            }, {
                test: /\.s[a|c]ss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }, {
                test: /\.vue$/,
                loader: 'vue-loader'
            }].concat([ env == 'production' ?
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }]
                } : {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 1024 * 1024
                        }
                    }]
                }
            ])
        },
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.esm.js'
            },
            extensions: [ '.js', '.sass', '.scss', '.css', '.vue' ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                path: outputPath,
                filename: '[name].css'
            }),
            new VueLoaderPlugin()
        ]
    }
}