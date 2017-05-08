import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user/add-role', 'Integration | Component | user/add role', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{user/add-role}}`);
  assert.equal(this.$('.add-role').length, 1);
  assert.equal(this.$('input').length, 1);
  assert.equal(this.$('button').length, 2);
});
