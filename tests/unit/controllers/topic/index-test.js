import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:topic/index', 'Unit | Controller | topic/index', {
  needs: [
    'service:session-account',
    'controller:topic'
  ]
});

test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
