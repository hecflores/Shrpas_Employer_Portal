// Karma configuration
// Generated on Wed Feb 08 2017 00:24:37 GMT-0600 (Central Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

      singleRun: true, //just run once by default
      frameworks: [ 'mocha' ], //use the mocha test framework
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    //frameworks: ['mocha', 'requirejs', 'chai'],


    // list of files / patterns to load in the browser
    files: [
        '*.html',
        'tests.webpack.js' //just load this file
      //'test-app.js',
       // 'src/*.js',
        //'src/test/*.spec.js',


    ],

      reporters: [ 'dots' ], //report results in this format
      webpack: { //kind of a copy of your webpack config
          devtool: 'inline-source-map', //just do inline source maps instead of the default
          module: {
              loaders: [
                  { test: /\.js|\.jsx$/, loader: 'babel-loader' }
              ]
          }
      },
      webpackServer: {
          noInfo: false //please don't spam the console when running in karma!
      },
    // list of files to exclude
    exclude: [
    ],

  babelPreprocessor: {
      options: {
          presets: ['es2015'],
          sourceMap: 'inline'
      },
      filename: function (file) {
          return file.originalPath.replace(/\.js|\.jsx$/, '.es5.js');
      },
      sourceFileName: function (file) {
          return file.originalPath;
      }
  },
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors : {
          '**/*.html': ['html2js'],
          'src/test/*.spec.js':['coverage'],
          'tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
      },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //reporters: ['progress'],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS','Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    //singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
