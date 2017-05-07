import { moduleFor, test } from 'ember-qunit';

moduleFor('route:admin/roles/role', 'Unit | Route | admin/roles/role', {
  needs: [
    'service:session'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
