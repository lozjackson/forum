import Ember from 'ember';

const { computed: { readOnly }, inject: { controller }, Controller } = Ember;

export default Controller.extend({

  topic: controller(),

  replies: readOnly('model.meta.total-count'),

  editTopic() {
    this.transitionToRoute('topic.edit');
  },

  editPost(post) {
    this.transitionToRoute('topic.edit-post', post);
  },

  deleteTopic(model) {
    model.destroyRecord().then(() => this.transitionToRoute('index'));
  },

  deletePost(model) {
    model.destroyRecord();
  }
});
