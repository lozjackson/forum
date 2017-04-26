import { moduleFor, test } from 'ember-qunit';

moduleFor('route:topic/edit', 'Unit | Route | topic/edit', {
  needs: [
    'service:session'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
