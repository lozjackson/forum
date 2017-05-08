import Ember from 'ember';
import getErrorResponse from 'forum/utils/get-error-response';

const { inject: { service }, Component, RSVP: { Promise } } = Ember;

export default Component.extend({

  ajax: service(),
  dialog: service(),
  store: service(),

  classNames: ['add-role'],

  addRole(role, user) {
    const store = this.get('store');
    const url = `/users/${ user.get('id') }/add-role`;
    return new Promise((resolve, reject) => {
      this.get('ajax').put({ url, data: { name: role } }).then((data) => {
        store.pushPayload(data);
        resolve();
      }, (error) => {
        this.get('dialog').alert({ title: 'Error', body: getErrorResponse(error) });
        reject();
      });
    });
  },

  submit(model) {
    this.addRole(this.get('role'), model).then(() => {
      this.transitionToParent();
    });
  },

  cancel() {
    window.history.back();
  }
});
