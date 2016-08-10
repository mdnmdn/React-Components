module.exports = {
    context: __dirname + "/client",
    entry: "./index.js",
    devtool: 'source-map',
    output:
    {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,  // .babelrc { "presets": [ "es2015" ] }
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                babelrc: false,
                presets: [
                    'es2015' , 'react'
                ]
            }
        }]
    }
};