import { module, test } from 'qunit';
import validatePasswordStrength from 'forum/validators/password-strength';

module('Unit | Validator | password-strength');

test('it exists', function(assert) {
  const key = 'password'
  const validator = validatePasswordStrength();
  assert.equal(validator(key), false);
  assert.equal(validator(key, 'a'), false);
  assert.equal(validator(key, 'A!1a'), false);
  assert.equal(validator(key, 'A!aa'), false);
  assert.equal(validator(key, 'A1aa'), false);
  assert.equal(validator(key, '!1aa'), false);

  assert.equal(validator(key, 'A!1aa'), true);
  assert.equal(validator(key, 'VFds!Rd1a@a'), true);
});
