import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('register-user', 'Integration | Component | register user', {
  integration: true
});

test('it renders', function(assert) {

  this.setProperties({
    register() {},
    cancel() {}
  });
  this.render(hbs`{{register-user register register=(action register) cancel=(action cancel)}}`);

  assert.equal(this.$('.register-user').length, 1);
  assert.equal(this.$('form').length, 1);
  assert.equal(this.$('form input[type=text]').length, 2);
  assert.equal(this.$('form input[type=password]').length, 2);
  assert.equal(this.$('form button.register-button').length, 1);
  assert.equal(this.$('form button.cancel-button').length, 1);
});
