var path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
var DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin');

module.exports = {
    entry: {
        "my-lib": "./src/exporter.ts",
        "my-lib.min": "./src/exporter.ts",
    },
    output: {
        path: path.resolve(__dirname, "_bundles"),
        filename: "[name].js",
        libraryTarget: "umd",
        library: "@abbeblubb/react-library",
        umdNamedDefine: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    devtool: "source-map",
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({ 
          include: /\.min\.js$/ 
        })],
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                  {
                      loader: "ts-loader",
                      options: {
                          compilerOptions: {
                            "emitDeclarationOnly": false,
                            "declaration": false,
                            "module": "umd"
                          }
                      }
                  }
              ],
            },
        ],
    },
  //   watch: true,
  //   plugins: [
  //     new DeclarationBundlerPlugin({
  //         moduleName:'@abbeblubbreactlibrary',
  //         out:'./_bundles.d.ts',
  //     })
  // ]
};
