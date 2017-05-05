import Ember from 'ember';
import Changeset from 'ember-changeset';

const { computed, Controller } = Ember;

export default Controller.extend({
  changeset: computed('model', function () {
    return new Changeset(this.get('model'));
  }),

  submit(changeset) {
    changeset.save().then(() => this.transitionToRoute('index'));
  },

  cancel() {
    let { changeset, model } = this.getProperties('changeset', 'model');
    changeset.rollback();
    if (model.get('isNew')) {
      model.deleteRecord();
    }
    window.history.back();
  }
});
