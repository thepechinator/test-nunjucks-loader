module.exports = {
    target: 'web',

    context: __dirname,

    entry: "mocha!./web.js",

    module: {
        loaders: [
            {
                test: /\.(nunj|nunjucks)$/,
                loader: 'nunjucks-loader'
            }
        ]
    },

    resolve: {
        root: [
            __dirname,
            __dirname + '/fixtures/templates'
        ]
    },

    resolveLoader: {
        modulesDirectories: ['node_modules']
    }
};
