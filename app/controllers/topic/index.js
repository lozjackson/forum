import Ember from 'ember';

export default Ember.Controller.extend({

  edit() {
    this.transitionToRoute('topic.edit');
  },

  editPost(post) {
    this.transitionToRoute('topic.edit-post', post);
  }
});
