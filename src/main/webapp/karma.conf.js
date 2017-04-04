// Karma configuration
// Generated on Wed Feb 08 2017 00:24:37 GMT-0600 (Central Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
<<<<<<< HEAD
<<<<<<< HEAD
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'requirejs', 'chai'],
=======
=======
>>>>>>> refs/remotes/origin/master
    basePath: './',

      singleRun: true, //just run once by default
      frameworks: [ 'mocha' ], //use the mocha test framework
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    //frameworks: ['mocha', 'requirejs', 'chai'],
<<<<<<< HEAD
>>>>>>> b52cc917bd6158e211e6fd5ad8ad68cceba8ac8e
=======
>>>>>>> refs/remotes/origin/master


    // list of files / patterns to load in the browser
    files: [
<<<<<<< HEAD
<<<<<<< HEAD
      'test-main.js',
        'src/*.js',
        'src/test/*.spec.js',


    ],


=======
=======
>>>>>>> refs/remotes/origin/master
        'node_modules/angular/angular.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'tests.webpack.js', //just load this file
      //'test-app.js',
        //'src/test/*.spec.js',


    ],
      webpack: { //kind of a copy of your webpack config
          devtool: 'inline-source-map', //just do inline source maps instead of the default
          module: {

              loaders: [
                  //New Code - Exactly what the running version has
                  // {
                  //     test: /\.js|\.jsx$/,
                  //     exclude: /node_modules/,
                  //     loader: 'babel',
                  //     query: {
                  //         presets: ['es2015', 'react']
                  //     }
                  // }

                  //Old Code
                   {
                       test: /\.js|\.jsx$/,
                       loader: 'babel-loader'
                   },
              ],
              postLoaders: [ { //delays coverage til after tests are run, fixing transpiled source coverage error
                  test: /\.js|\.jsx$/,
                  exclude: /(test|node_modules|bower_components)/,
                  loader: "istanbul-instrumenter",
                  presets: ['es2015', 'react']
              } ]
          },
      },
      webpackServer: {
          noInfo: false //please don't spam the console when running in karma!
      },
<<<<<<< HEAD
>>>>>>> b52cc917bd6158e211e6fd5ad8ad68cceba8ac8e
=======
>>>>>>> refs/remotes/origin/master
    // list of files to exclude
    exclude: [
    ],

<<<<<<< HEAD
<<<<<<< HEAD
      babelPreprocessor: {
          options: {
              presets: ['es2015'],
              sourceMap: 'inline'
          },
          filename: function (file) {
              return file.originalPath.replace(/\.js$/, '.es5.js');
          },
          sourceFileName: function (file) {
              return file.originalPath;
          }
      },
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors : {
          'src/test/*.spec.js':['coverage']
=======
=======
>>>>>>> refs/remotes/origin/master
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
           'src/components/Template/tests/App.jsx': ['coverage'],
          'src/test/*.spec.js':['sourcemap','coverage'],
          'tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
<<<<<<< HEAD
>>>>>>> b52cc917bd6158e211e6fd5ad8ad68cceba8ac8e
=======
>>>>>>> refs/remotes/origin/master
      },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
<<<<<<< HEAD
<<<<<<< HEAD
    reporters: ['progress'],
=======
    //reporters: ['progress'],
>>>>>>> b52cc917bd6158e211e6fd5ad8ad68cceba8ac8e
=======
    //reporters: ['progress'],
>>>>>>> refs/remotes/origin/master

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
<<<<<<< HEAD
<<<<<<< HEAD
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
=======
=======
>>>>>>> refs/remotes/origin/master
    browsers: ['PhantomJS','Chrome'],

    reporters: ['progress', 'html','coverage' ],

    htmlReporter: {
      outputFile: 'test-reports/units.html'
    },
     coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    //singleRun: true,
<<<<<<< HEAD
>>>>>>> b52cc917bd6158e211e6fd5ad8ad68cceba8ac8e
=======
>>>>>>> refs/remotes/origin/master

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
