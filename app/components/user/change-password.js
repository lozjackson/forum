import Ember from 'ember';
import Changeset from 'ember-changeset';
import UserValidations from 'forum/validations/user';
import lookupValidator from 'ember-changeset-validations';
import getErrorResponse from 'forum/utils/get-error-response';
import { strong, medium, weak } from 'forum/validators/password-strength';

const { computed, inject: { service }, Component } = Ember;

const passwordStrengthNames = ['none', 'weak', 'medium', 'strong'];

function serialize(data, id) {
  return { id, type: 'users', attributes: {
    'password': data.password,
    'password_confirmation': data.passwordConfirmation
  }};
}

export default Component.extend({

  dialog: service(),
  ajax: service(),
  classNames: ['change-password'],
  passwordSaved: 'Your password has been saved!',

  changeset: computed(function () {
    return new Changeset(Ember.Object.create(), lookupValidator(UserValidations), UserValidations);
  }),

  passwordStrengthName: computed('passwordStrength', function () {
    return passwordStrengthNames[this.get('passwordStrength')];
  }),

  passwordStrength: computed('changeset.password', function () {
    const password = this.get('changeset.password');
    if (strong.exec(password)) { return 3; }
    if (medium.exec(password)) { return 2; }
    if (weak.exec(password)) { return 1; }
    return 0;
  }),

  savePassword() {
    const changeset = this.get('changeset');
    const id = this.get('model.id');
    this.get('ajax').put({
      url: `/users/${id}/change-password`,
      data: serialize(changeset.getProperties('password', 'passwordConfirmation'), id)
    }).then(() => {
      this.get('dialog').alert(this.get('passwordSaved'));
      window.history.back();
    }, (data) => this.get('dialog').alert({
      title: 'Error',
      body: getErrorResponse(data)
    }));
  },

  submit(changeset) {
    this.savePassword(changeset);
  },

  cancel() {
    this.get('changeset').rollback();
    window.history.back();
  }
});
