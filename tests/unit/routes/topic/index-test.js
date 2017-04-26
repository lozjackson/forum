import { moduleFor, test } from 'ember-qunit';

moduleFor('route:topic/index', 'Unit | Route | topic/index', {
  needs: [
    // 'service:session-account'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
