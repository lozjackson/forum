import { moduleFor, test } from 'ember-qunit';

moduleFor('route:user-profile/index', 'Unit | Route | user profile/index', {
  needs: [
    'service:session'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
