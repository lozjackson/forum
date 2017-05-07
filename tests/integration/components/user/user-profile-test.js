import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user/user-profile', 'Integration | Component | user/user profile', {
  integration: true
});

test('it renders', function(assert) {
  this.setProperties({
    submit: () => {},
    cancel: () => {}
  });
  this.render(hbs`{{user/user-profile submit=(action submit) cancel=(action cancel)}}`);
  assert.equal(this.$('.user-profile').length, 1);
});
