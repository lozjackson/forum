import Ember from 'ember';
import Changeset from 'ember-changeset';
import UserValidations from '../validations/user';
import lookupValidator from 'ember-changeset-validations';

const { computed, Controller } = Ember;

export default Controller.extend({

  changeset: computed('model', function () {
    return new Changeset(this.get('model'), lookupValidator(UserValidations), UserValidations);
  }),

  submit(changeset) {
    changeset.save();
  },

  cancel() {
    this.get('changeset').rollback();
    window.history.back();
  }
});
