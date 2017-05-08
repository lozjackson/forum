import Ember from 'ember';
import { Ability } from 'ember-can';

const { computed } = Ember;

export default Ability.extend({
  canEdit: computed('sessionAccount.isAdmin', 'sessionAccount.user', 'sessionAccount.user.roles.@each.name', 'model.user', function() {
    const currentUser = this.get('sessionAccount.user');
    if (currentUser) {
      if (this.get('model.user.content') === currentUser) {
        return true;
      }
      if (currentUser.get('roles').findBy('name', 'moderator')) {
        return true;
      }
      if (this.get('sessionAccount.isAdmin')) {
        return true;
      }
    }
    return false;
  })
});
