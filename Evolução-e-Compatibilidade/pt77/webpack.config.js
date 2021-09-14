const path = require("path")

module.exports = {
    entry : {
        index: './src/index.js',
        galaxy: './src/galaxy.js'
    },
    output: {
        filename : '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module:{
        rules: [
            {
                test: /\.js$/, // test (o que ele vai fazer pra buscar os arquivos) - webpack percorre e procure todos os arquivos que terminam com .js
                user : ['babel-loader'] // babel-loader no momento que for procurar os arquivos
            }
        ]
    },

    watch: true,

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        watchContentBase:true,
        liveReload: true
    }
}