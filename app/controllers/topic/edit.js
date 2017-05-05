import Ember from 'ember';
import Changeset from 'ember-changeset';

const { computed, Controller } = Ember;

export default Controller.extend({
  changeset: computed('model', function () {
    return new Changeset(this.get('model'));
  }),

  submit(changeset) {
    changeset.save().then(() => this.transitionToRoute('topic.index'));
  },

  cancel() {
    this.get('changeset').rollback();
    window.history.back();
  }
});
