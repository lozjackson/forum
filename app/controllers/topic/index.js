import Ember from 'ember';
import getErrorResponse from 'forum/utils/get-error-response';
const { computed: { readOnly }, inject: { controller, service }, Controller } = Ember;

export default Controller.extend({

  dialog: service(),
  topic: controller(),

  replies: readOnly('model.meta.total-count'),

  editTopic() {
    this.transitionToRoute('topic.edit');
  },

  editPost(post) {
    this.transitionToRoute('topic.edit-post', post);
  },

  deleteTopic(model) {
    model.destroyRecord().then(
      () => this.transitionToRoute('index'),
      (error) => this.get('dialog').alert({ title: 'Error', body: getErrorResponse(error)})
    );
  },

  deletePost(model) {
    model.destroyRecord();
  }
});
