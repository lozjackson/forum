import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-topic', 'Integration | Component | edit topic', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{edit-topic}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#edit-topic}}
      template block text
    {{/edit-topic}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
