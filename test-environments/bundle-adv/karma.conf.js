module.exports = function (config) {
    config.set({
        browsers: ['ChromeHeadless'],
        basePath: '../../target/bundle-adv/resources/public/',
        files: ['js/out/karma.js'],
        frameworks: ['cljs-test'],
        preprocessors: {
          'js/out/karma.js': ['webpack', 'sourcemap']
        },
        colors: true,
        logLevel: config.LOG_INFO,
        client: {
            args: ['reagenttest.runtests.karma_tests'],
        },
        singleRun: true,
        // TODO: Cljs will get option to control global object?
        // webpack: {}
        webpack: {
            mode: 'production',
            module: {
                rules: [
                    {
                        test: /js\/out\/karma\.js$/,
                        use: 'imports-loader?this=>window'
                    }
                ]
            }
        }
    });
};
