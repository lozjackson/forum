import { moduleFor, test } from 'ember-qunit';

moduleFor('route:admin/index', 'Unit | Route | admin/index', {
  needs: [
    'service:session'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
