import { moduleFor, test } from 'ember-qunit';

moduleFor('route:admin/users/user/change-password', 'Unit | Route | admin/users/user/change password', {
  needs: [
    'service:session'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
