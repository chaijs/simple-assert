module.exports = function configureKarma(config) {
  config.set({
    basePath: '.',
    browsers: ['ChromeHeadless'],
    frameworks: [ 'mocha' ],
    files: [ 
      { pattern: './dist/bundled.js', included: false },
      { pattern: './dist/bundled.test.js', type: 'module' }
    ],
    colors: true,
    autoWatch: false,
    singleRun: true
  });
};
