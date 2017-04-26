import { moduleFor, test } from 'ember-qunit';

moduleFor('service:session-account', 'Unit | Service | session account', {
  needs: ['service:session']
});

test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});
