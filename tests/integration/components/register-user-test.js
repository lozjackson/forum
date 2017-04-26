import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('register-user', 'Integration | Component | register user', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{register-user}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#register-user}}
      template block text
    {{/register-user}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
