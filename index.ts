import {AssertionError} from 'assertion-error'

/**
 * ### assert (expr[, msg])
 *
 * Perform a truthy assertion.
 *
 * ```js
 * var assert = require('simple-assert');
 * assert(true, 'true is truthy');
 * assert(1, '1 is truthy');
 * assert('string', 'string is truthy');
 * ```
 *
 * @throws AssertionError
 */

export function assert (expr: unknown, msg: string) {
  if (!expr) {
    throw new AssertionError(msg || 'Assertion Failed');
  }
}

/**
 * ### assert.not (expr[, msg])
 *
 * Perform a falsey assertion.
 *
 * ```js
 * db.get(123, function (err, doc) {
 *   assert.not(err, 'db.get returned error');
 *   // ...
 * });
 * ```
 *
 * @throws AssertionError
 */

export function not (expr: unknown, msg: string) {
  assert(!expr, msg);
};

/**
 * ### assert.fail ([msg])
 *
 * Force an `AssertionError` to be thrown.
 *
 * ```js
 * switch (res.statusCode) {
 *   case 200:
 *     // ..
 *     break;
 *   case 404:
 *     // ..
 *     break;
 *   default:
 *     assert.fail('Unknown response statusCode');
 * }
 * ```
 *
 * @throws AssertionError
 */

export function fail(msg: string) {
  assert(false, msg);
};
