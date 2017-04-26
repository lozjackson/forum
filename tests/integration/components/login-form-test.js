import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('login-form', 'Integration | Component | login form', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{login-form}}`);

  assert.equal(this.$('.login-form').length, 1);
  assert.equal(this.$('form').length, 1);
  assert.equal(this.$('form input[type=text]').length, 1);
  assert.equal(this.$('form input[type=password]').length, 1);
  assert.equal(this.$('form button.login-button').length, 1);
});
