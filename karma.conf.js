// Karma configuration

// Generated on Sun Nov 15 2015 02:45:42 GMT-0500 (Eastern Standard Time)



module.exports = function(config) {

  config.set({



    // base path that will be used to resolve all patterns (eg. files, exclude)

    basePath: '',



    proxies: {

        "/node_modules/":"/base/node_modules/",

        "/tests/":"/base/tests/",

        "/app/":"/base/app/",

        "/base/jspm_packages/":"/base/app/jspm_packages/",

    },

    // frameworks to use

    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter

    frameworks: ['jspm','jasmine'],





    // list of files / patterns to load in the browser

    files: [

    ],



    jspm:{

        //config: 'app/config.js',

        //packages: 'app/jspm_packages',

        //loadFiles: ['tests/**/*.js'],

        loadFiles: ['tests/app.spec.js'],

        serveFiles: ['app/scripts/**/*.js']

    },

    // list of files to exclude

    exclude: [

    ],



    plugins: ['karma-jspm', 'karma-jasmine', 'karma-firefox-launcher', 'karma-babel-preprocessor', 'karma-coverage'],

    // preprocess matching files before serving them to the browser

    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

    preprocessors: {

    },





    // test results reporter to use

    // possible values: 'dots', 'progress'

    // available reporters: https://npmjs.org/browse/keyword/karma-reporter

        reporters: ['coverage', 'progress'],



        coverageReporter: {

            instrumenters: {isparta: require('isparta')},

            instrumenter: {

                'src/*.js': 'isparta'

            },



            reporters: [

                {

                    type: 'text-summary',

                    subdir: normalizationBrowserName

                },

                {

                    type: 'html',

                    dir: 'coverage/',

                    subdir: normalizationBrowserName

                }

            ]

        },



    // web server port

    port: 9876,





    // enable / disable colors in the output (reporters and logs)

    colors: true,





    // level of logging

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG

    logLevel: config.LOG_INFO,





    // enable / disable watching file and executing tests whenever any file changes

    autoWatch: true,





    // start these browsers

    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher

    browsers: ['Firefox'],





    // Continuous Integration mode

    // if true, Karma captures browsers, runs the tests and exits

    singleRun: false,



    // Concurrency level

    // how many browser should be started simultanous

    concurrency: Infinity

  });

    function normalizationBrowserName(browser) {

        return browser.toLowerCase().split(/[ /-]/)[0];

    }

}

