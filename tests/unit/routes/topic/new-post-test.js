import { moduleFor, test } from 'ember-qunit';

moduleFor('route:topic/new-post', 'Unit | Route | topic/new post', {
  needs: [
    'service:session',
    'service:session-account'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
