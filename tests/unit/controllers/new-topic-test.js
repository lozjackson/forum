import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

const { typeOf } = Ember;
moduleFor('controller:new-topic', 'Unit | Controller | new topic', {
  // needs: ['controller:foo'],
  // beforeEach: function () {
  //   this.inject.service('store', { as: 'store' });
  // }
});

test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

test('changeset', function(assert) {
  assert.expect(1);
  let controller = this.subject();
  controller.set('model',Ember.Object.create());
  assert.equal(typeOf(controller.get('changeset')), 'instance');
});

test('submit', function(assert) {
  assert.expect(2);
  let controller = this.subject({
    transitionToRoute: (routeName) => assert.equal(routeName, 'index')
  });

  let changeset = Ember.Object.create({
    save: () => assert.ok(true)
  });
  controller.submit(changeset);
});

test('cancel', function(assert) {
  assert.expect(3);
  const _back = window.history.back;
  window.history.back = () => assert.ok(true);
  let controller = this.subject({
    changeset: {
      rollback: () => assert.ok(true)
    },
    model: Ember.Object.create({
      isNew: true,
      deleteRecord: () => assert.ok(true)
    })
  });

  controller.cancel();
  window.history.back = _back;
});
