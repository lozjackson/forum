import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user/change-password', 'Integration | Component | user/change password', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{user/change-password}}`);
  assert.equal(this.$('.change-password').length, 1);
  assert.equal(this.$('input[type=password]').length, 2);
  assert.equal(this.$('button').length, 2);
});
