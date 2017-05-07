import { moduleFor, test } from 'ember-qunit';

moduleFor('route:admin/roles/index', 'Unit | Route | admin/roles/index', {
  needs: [
    'service:session'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
