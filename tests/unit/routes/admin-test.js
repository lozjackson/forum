import { moduleFor, test } from 'ember-qunit';

moduleFor('route:admin', 'Unit | Route | admin', {
  needs: [
    'service:session',
    'service:session-account'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
