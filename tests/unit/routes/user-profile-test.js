import { moduleFor, test } from 'ember-qunit';

moduleFor('route:user-profile', 'Unit | Route | user profile', {
  needs: [
    'service:session',
    'service:session-account'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
