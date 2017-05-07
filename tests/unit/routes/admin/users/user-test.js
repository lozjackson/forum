import { moduleFor, test } from 'ember-qunit';

moduleFor('route:admin/users/user', 'Unit | Route | admin/users/user', {
  needs: [
    'service:session'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
