// Karma configuration
// Generated on Thu Sep 24 2015 14:48:13 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    plugins: [
      require('karma-systemjs'),
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-chrome-launcher')
    ],

    systemjs: {
      configFile: 'system.config.js',
      // These files are served by Karma, but loaded using SystemJS
      files: ['./src/**/*.ts', './test/**/*.ts', './node_modules/angular2/**/*'],
      // This is turned into a regexp and used to load specs into Karma
      testFileSuffix: "/test/\\S+.[tj]s"
    },

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['systemjs', 'jasmine'],


    // list of files / patterns to load in the browser
    files: [
      { watched: false, included: false, nocache: true, pattern: 'node_modules/**/*' },
      { watched: true, included: true, nocache: true, pattern: 'src/*.ts' },
      { watched: true, included: true, nocache: true, pattern: 'test/*.ts' }
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


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
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
