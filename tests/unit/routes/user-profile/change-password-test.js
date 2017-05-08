import { moduleFor, test } from 'ember-qunit';

moduleFor('route:user-profile/change-password', 'Unit | Route | user profile/change password', {
  needs: [
    'service:session',
    'service:session-account'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
