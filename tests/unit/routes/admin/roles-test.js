import { moduleFor, test } from 'ember-qunit';

moduleFor('route:admin/roles', 'Unit | Route | admin/roles', {
  needs: [
    'service:session'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
