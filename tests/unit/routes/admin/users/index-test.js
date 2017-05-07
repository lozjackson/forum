import { moduleFor, test } from 'ember-qunit';

moduleFor('route:admin/users/index', 'Unit | Route | admin/users/index', {
  needs: [
    'service:session'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
