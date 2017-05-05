import { moduleFor, test } from 'ember-qunit';

moduleFor('route:topic/edit-post', 'Unit | Route | topic/edit post', {
  needs: ['service:session']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
