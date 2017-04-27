import Ember from 'ember';
import { initialize } from 'forum/initializers/ability';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

module('Unit | Initializer | ability', {
  beforeEach() {
    Ember.run(() => {
      this.application = Ember.Application.create();
      this.application.deferReadiness();
    });
  },
  afterEach() {
    destroyApp(this.application);
  }
});

test('it works', function(assert) {
  initialize(this.application);
  assert.ok(true);
});
