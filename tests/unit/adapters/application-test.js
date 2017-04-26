import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:application', 'Unit | Adapter | application', {
  needs: ['service:session']
});

test('it exists', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);
});

test('has correct authorizer', function(assert) {
  let adapter = this.subject();
  assert.equal(adapter.authorizer, 'authorizer:oauth2');
});
