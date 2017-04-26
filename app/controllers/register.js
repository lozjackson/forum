import Ember from 'ember';
import Changeset from 'ember-changeset';
import UserValidations from '../validations/user';
import lookupValidator from 'ember-changeset-validations';

const { computed, Controller } = Ember;

export default Controller.extend({
  changeset: computed('model', function () {
    return new Changeset(this.get('model'), lookupValidator(UserValidations), UserValidations);
  }),

  register(changeset) {
    changeset.save();
    this.transitionToRoute('index');
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
