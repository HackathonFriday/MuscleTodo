// Node.jsに組み込まれているモジュール。出力先などの指定をするために利用する。
const path = require('path');

// bundle時にlicense情報のtxtファイルが生成されるのを避けるため
const TerserPlugin = require('terser-webpack-plugin');

// scssのcompileに使用。個別のcssファイルへの出力を可能にする。
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// glob
const glob = require('glob');

// globを使用して任意のJS fileを取得し、multi entry point用のobjectを生成
const srcDir = './resources/js';
const entries = {};

glob.sync('**/*.js', {
    // compile対象外のファイル
    ignore: '**/_share/*.js',
    // 基準ディレクトリを指定
    cwd: srcDir,
}).forEach((jsFileName) => {
    // entryオプション用に整形
    const fileNameExceptExt = jsFileName.replace(/\.js$/, '');
    entries[fileNameExceptExt] = path.resolve(srcDir, jsFileName);
});

module.exports = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    entry: entries,
    output: {
        path: path.resolve(__dirname, 'app/assets'),
        filename: 'javascripts/[name].js',
    },
    resolve: {
        alias: {
            '@scss': path.resolve(__dirname, 'resources/scss'),
            '@js': path.resolve(__dirname, 'resources/js'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'resources/js'),
                use: ['babel-loader'],
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'resources/scss'),
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'stylesheets/[name].css',
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false
            })
        ]
    }
};
