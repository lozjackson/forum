import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('route:application', 'Unit | Route | application', {
  needs: [
    'service:session',
    'service:session-account'
  ]
});

const Session = Ember.Service.extend({
  on() {}
});

test('it exists', function(assert) {
  let route = this.subject({ session: Session.create() });
  assert.ok(route);
});

test('beforeModel', function(assert) {
  assert.expect(1);
  let route = this.subject({
    session: Session.create(),
    _loadCurrentUser: () => {
      assert.ok(true);
    }
  });
  route.beforeModel();
});

test('_loadCurrentUser', function(assert) {
  assert.expect(1);
  let route = this.subject({
    session: Session.create(),
    sessionAccount: Ember.Object.create({
      loadCurrentUser: () => {
        assert.ok(true);
      }
    })
  });
  route._loadCurrentUser();
});

test('_logout', function(assert) {
  assert.expect(1);
  let route = this.subject({
    session: Session.create({
      invalidate: () => assert.ok(true)
    })
  });
  route._logout();
});

test('_logout', function(assert) {
  assert.expect(1);
  let route = this.subject({
    session: Session.create(),
    _logout: () => assert.ok(true)
  });
  route.send('logout');
});
