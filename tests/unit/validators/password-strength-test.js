import { module, test } from 'qunit';
import validatePasswordStrength from 'forum/validators/password-strength';

module('Unit | Validator | password-strength');

test('default', function(assert) {
  const key = 'password'
  const validator = validatePasswordStrength();
  assert.equal(validator(key), 'Password is not valid');
  assert.equal(validator(key, 'a'), 'Password is not valid');
  assert.equal(validator(key, 'A!1a'), 'Password is not valid');
  assert.equal(validator(key, 'A!aa'), 'Password is not valid');
  assert.equal(validator(key, 'A1aa'), 'Password is not valid');
  assert.equal(validator(key, '!1aa'), 'Password is not valid');

  assert.equal(validator(key, 'A!1aa'), true);
  assert.equal(validator(key, 'VFds!Rd1a@a'), true);
});

test('strong', function(assert) {
  const key = 'password'
  const validator = validatePasswordStrength({ strength: 'strong' });
  assert.equal(validator(key), 'Password is not valid');
  assert.equal(validator(key, 'a'), 'Password is not valid');
  assert.equal(validator(key, 'A!1a'), 'Password is not valid');
  assert.equal(validator(key, 'A!aa'), 'Password is not valid');
  assert.equal(validator(key, 'A1aa'), 'Password is not valid');
  assert.equal(validator(key, '!1aa'), 'Password is not valid');

  assert.equal(validator(key, 'A!1aa'), true);
  assert.equal(validator(key, 'VFds!Rd1a@a'), true);
});

test('medium', function(assert) {
  const key = 'password'
  const validator = validatePasswordStrength({ strength: 'medium' });
  assert.equal(validator(key), 'Password is not valid');
  assert.equal(validator(key, 'a'), 'Password is not valid');
  assert.equal(validator(key, 'A!aa'), 'Password is not valid');
  assert.equal(validator(key, 'A1aa'), 'Password is not valid');
  assert.equal(validator(key, '!1aa'), 'Password is not valid');

  assert.equal(validator(key, 'A!1a'), true);
  assert.equal(validator(key, 'VFds!Rd1a@a'), true);
});

test('weak', function(assert) {
  const key = 'password'
  const validator = validatePasswordStrength({ strength: 'weak' });
  assert.equal(validator(key), 'Password is not valid');
  assert.equal(validator(key, 'a'), 'Password is not valid');
  assert.equal(validator(key, 'abc'), 'Password is not valid');
  assert.equal(validator(key, '123'), 'Password is not valid');
  assert.equal(validator(key, '!@£'), 'Password is not valid');

  assert.equal(validator(key, 'A!aa'), true);
  assert.equal(validator(key, '!1aa'), true);
  assert.equal(validator(key, 'A1aa'), true);
  assert.equal(validator(key, 'A!1a'), true);
  assert.equal(validator(key, 'VFds!Rd1a@a'), true);
});
