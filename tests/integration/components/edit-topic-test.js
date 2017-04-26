import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-topic', 'Integration | Component | edit topic', {
  integration: true
});

test('it renders', function(assert) {

  this.setProperties({
    model: { body: '' },
    submit() {},
    cancel() {}
  })

  this.render(hbs`{{edit-topic model=model submit=(action submit) cancel=(action cancel)}}`);

  assert.equal(this.$('.edit-topic').length, 1);
  assert.equal(this.$('.edit-topic input').length, 1);
  assert.equal(this.$('.edit-topic p').length, 1);
  assert.equal(this.$('.edit-topic button').length, 2);
});
