import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user/select-user', 'Integration | Component | user/select user', {
  integration: true
});

test('it renders', function(assert) {
  this.set('selectUser', () => {});
  this.render(hbs`{{user/select-user selectUser=(action selectUser)}}`);
  assert.equal(this.$('.select-user').length, 1);
});
