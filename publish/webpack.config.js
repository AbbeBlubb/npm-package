var path = require("path");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, './src/exporter.js'),
    output: {
        path: path.resolve(__dirname, './dist'), 
        filename: "index.js",
        library: "@abbeblubb/react-library",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    resolve: {
        extensions: [".jsx", ".js", ".json"],
      },
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    externals: {
        "react": "react",
        "react-dom": "react-dom"
    },
};
