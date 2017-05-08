import { moduleFor, test } from 'ember-qunit';

moduleFor('route:admin/users/user/add-role', 'Unit | Route | admin/users/user/add role', {
  needs: [
    'service:session'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
