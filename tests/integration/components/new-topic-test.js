import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-topic', 'Integration | Component | new topic', {
  integration: true
});

test('it renders', function(assert) {

  this.setProperties({
    submit() {},
    cancel() {}
  })

  this.render(hbs`{{new-topic submit=(action submit) cancel=(action cancel)}}`);

  assert.equal(this.$('.new-topic').length, 1);
  assert.equal(this.$('.new-topic input').length, 1);
  assert.equal(this.$('.new-topic textarea').length, 1);
  assert.equal(this.$('.new-topic button').length, 2);
});
