import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:admin/users/user', 'Unit | Controller | admin/users/user', {
  needs: [
    'service:ajax',
    'service:dialog',
    'service:session-account'
  ]
});

test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
