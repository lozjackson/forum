import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-post', 'Integration | Component | new post', {
  integration: true
});

test('it renders', function(assert) {

  this.setProperties({
    model: { body: '' },
    submit() {},
    cancel() {}
  })

  this.render(hbs`{{new-post model=model submit=(action submit) cancel=(action cancel)}}`);

  assert.equal(this.$('.new-post').length, 1);
  assert.equal(this.$('.new-post h2').length, 1);
  assert.equal(this.$('.new-post p').length, 1);
  assert.equal(this.$('.new-post button').length, 2);
});
