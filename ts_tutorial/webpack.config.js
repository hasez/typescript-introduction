const path = require('path');
module.exports = {
    // モジュールバンドルの起点となるファイルの指定
    entry: {
        bundle: './src/app.ts'
    },
    // モジュールバンドルの結果を出力する場所とファイル名の指定
    output: {
        path: path.join(__dirname, 'dist'), // "__dirname"は、webpack.config.jsのあるディレクトリを指す(node.jsの定数)
        filename: '[name].js'   // [name]は、entryで指定した名前が入る(今回はbundle)
    },
    // モジュールとして扱うファイルの拡張子を指定する
    // import Foo from './foo' という記述で、foo.ts ファイルをモジュールとして探す
    // デフォルトは['.js', '.json']
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        // webpack-dev-serverの公開フォルダ
        static: {
            directory: path.join(__dirname, "dist"),
        },
    },
    // モジュールに適用するルールの設定
    module: {
        rules: [
            {
                // 拡張子が.tsのファイルに対して、TypeScriptコンパイラを適用する
                test: /\.ts$/, loader: 'ts-loader'
            }
        ]
    }
}