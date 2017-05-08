import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:index', 'Unit | Controller | index', {
  needs: [
    'service:session-account'
  ]
});

test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
