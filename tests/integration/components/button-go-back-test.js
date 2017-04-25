import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('button-go-back', 'Integration | Component | button go back', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{button-go-back}}`);
  assert.equal(this.$('svg').html(), `<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>\n`);
});
