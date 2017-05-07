import Ember from 'ember';

export default Ember.Controller.extend({
  selectUser(id) {
    this.transitionToRoute('admin.users.user', id);
  }
});
