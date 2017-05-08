import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:admin/users/user/index', 'Unit | Controller | admin/users/user/index', {
  needs: [
    'service:ajax',
    'service:dialog',
    'service:session-account'
  ]
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
