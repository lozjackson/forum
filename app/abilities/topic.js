import Ember from 'ember';
import { Ability } from 'ember-can';

const { computed } = Ember;

export default Ability.extend({
  canEdit: computed('sessionAccount.isAdmin', 'sessionAccount.user', 'model.author', function() {
    return this.get('model.author.content') === this.get('sessionAccount.user') || this.get('sessionAccount.isAdmin');
  })
});
