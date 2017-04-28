import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

const { run } = Ember;

moduleFor('ability:topic', 'Unit | Ability | topic', {
  needs: [
    'model:user',
    'model:topic',
    'model:post'
  ],
  beforeEach: function () {
    this.inject.service('store', { as: 'store' });
  }
});

test('admin canEdit', function(assert) {
  let model, user;
  run(() => {
    user = this.store.createRecord('user');
    model = this.store.createRecord('post');
  });
  const sessionAccount = Ember.Service.create({
    isAdmin: true,
    user
  });
  const ability = this.subject({
    sessionAccount,
    model
  });
  assert.equal(ability.get('canEdit'), true);
  sessionAccount.set('isAdmin', false);
  assert.equal(ability.get('canEdit'), false);
});

test('author canEdit', function(assert) {
  let model, user;
  run(() => {
    user = this.store.createRecord('user');
    model = this.store.createRecord('post', { author: user });
  });
  const sessionAccount = Ember.Service.create({
    isAdmin: false,
    user
  });
  const ability = this.subject({
    sessionAccount,
    model
  });
  assert.equal(ability.get('canEdit'), true);
  run(() => model.set('author', null));
  assert.equal(ability.get('canEdit'), false);
});
