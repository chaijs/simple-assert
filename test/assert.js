import {AssertionError} from 'assertion-error'
import {assert, fail, not} from '../dist/bundled.js'

function err (fn, msg) {
  var thrown = false;
  try {
    fn();
  } catch (ex) {
    thrown = true;

    if (msg && msg !== ex.message) {
      var report = 'Expected "' + ex.message + '" to equal "' + msg + '".'
      throw new AssertionError(report);
    }
  }

  if (!thrown) {
    throw new AssertionError('Expected an error.');
  }
}

it('assert(expr)', function () {
  assert('string', 'string');

  assert(true, 'true');
  err(function () {
    assert(false, 'test message');
  }, 'test message');

  assert(1, '1');
  err(function () {
    assert(0, 'test message');
  }, 'test message');

  err(function () {
    assert(null, 'test message');
  }, 'test message');

  err(function () {
    assert(undefined, 'test message');
  }, 'test message');
});

it('not(expr)', function () {
  not(false, 'false');
  err(function () {
    not(true, 'test message');
  }, 'test message');

  not(0, '0');
  err(function () {
    not(1, 'test message');
  }, 'test message');

  not(null, 'null');
  not(undefined, 'undefined');
  err(function () {
    not('string', 'test message');
  }, 'test message');
});

it('fail(msg)', function () {
  err(function () {
    fail('test message');
  }, 'test message');
});
