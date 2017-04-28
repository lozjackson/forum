import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-post', 'Integration | Component | edit post', {
  integration: true
});

test('it renders', function(assert) {

  this.setProperties({
    model: { body: '' },
    submit() {},
    cancel() {}
  })

  this.render(hbs`{{edit-post model=model submit=(action submit) cancel=(action cancel)}}`);

  assert.equal(this.$('.edit-post').length, 1);
  assert.equal(this.$('.edit-post p').length, 1);
  assert.equal(this.$('.edit-post button').length, 2);
});
