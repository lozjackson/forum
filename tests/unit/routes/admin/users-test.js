import { moduleFor, test } from 'ember-qunit';

moduleFor('route:admin/users', 'Unit | Route | admin/users', {
  needs: [
    'service:session'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
