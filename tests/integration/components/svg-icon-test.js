import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('svg-icon', 'Integration | Component | svg icon', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{svg-icon}}`);
  assert.equal(this.$('svg').length, 1);

  // Template block usage:
  this.render(hbs`
    {{#svg-icon}}
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    {{/svg-icon}}
  `);

  assert.equal(this.$('svg > path').length, 1);
});
