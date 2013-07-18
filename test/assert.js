function err (fn, msg) {
  var thrown = false;
  try {
    fn();
  } catch (ex) {
    thrown = true;

    if (msg && msg !== ex.message) {
      var report = 'Expected "' + ex.message + '" to equal "' + msg + '".'
      throw new assert.AssertionError(report, null, arguments.callee);
    }
  }

  if (!thrown) {
    throw new assert.AssertionError('Expected an error.', null, arguments.callee);
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

it('assert.not(expr)', function () {
  assert.not(false, 'false');
  err(function () {
    assert.not(true, 'test message');
  }, 'test message');

  assert.not(0, '0');
  err(function () {
    assert.not(1, 'test message');
  }, 'test message');

  assert.not(null, 'null');
  assert.not(undefined, 'undefined');
  err(function () {
    assert.not('string', 'test message');
  }, 'test message');
});

it('assert.fail(msg)', function () {
  err(function () {
    assert.fail('test message');
  }, 'test message');
});
