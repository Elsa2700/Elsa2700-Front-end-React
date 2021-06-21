const path = require("path");
module.exports = {
    //建置模式: development、production
    mode: "development",
    //入口
    entry: "./src/index.js",
    //輸出
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    //DevServer 設定
    devServer: {
        hot: true,
        historyApiFallback:{
            index:'dist/index.html'
        },
      },
    //模組載入規則
    module: {
        rules: [
            //CSS樣式表載入規則
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }


}