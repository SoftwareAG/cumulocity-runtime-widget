const URLImportPlugin  = require("webpack-external-import/webpack");

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    },
    optimization: {
        runtimeChunk: {
            name: "webpackRuntime"
        }
    },
    plugins: [
        new URLImportPlugin ({
            manifestName: require('./cumulocity').contextPath,
            fileName: "importManifest.js",
            basePath: '',
            publicPath: `/apps/${require('./cumulocity').contextPath}/`,
            writeToFileEmit: false,
            filter: null,
            debug: true,
            useExternals: {
                "@angular/animations": "@angular/animations",
                "@angular/common": "@angular/common",
                "@angular/common/http": "@angular/common/http",
                "@angular/core": "@angular/core",
                "@angular/forms": "@angular/forms",
                "@angular/http": "@angular/http",
                "@angular/platform-browser": "@angular/platform-browser",
                "@angular/platform-browser/animations": "@angular/platform-browser/animations",
                "@angular/router": "@angular/router",
                "@c8y/client": "@c8y/client",
                "@c8y/ngx-components": "@c8y/ngx-components"
            },
        })
    ],
    output: {
        filename: '[contenthash].js'
    },
};
