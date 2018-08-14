var webpack = require('webpack');
const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');
module.exports = env => {
    const entryPath = path.join(__dirname,'game.js');
    return {
        entry: entryPath,
        output: {
            path: path.join(__dirname,'./dist'),
            filename: 'entry.js',
        },
        plugins:[
                new WebpackShellPlugin({
                    onBuildStart:['echo begin pack'],
                    onBuildEnd:['node strip.js']
                    }) 
            ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {presets: ["es2015", "stage-0", "react"]}
                }
            ]
        },
        resolve: {
            modules: [path.resolve(__dirname), 'node_modules']
        }

}
}
