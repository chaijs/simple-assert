module.exports = process.env.assert_COV
  ? require('./lib-cov/assert')
  : require('./lib/assert');
