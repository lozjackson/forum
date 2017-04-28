import Ember from 'ember';

const { computed: { readOnly }, inject: { service }, isEmpty, RSVP: { Promise } } = Ember;

export default Ember.Service.extend({

  session: service(),
  store: service(),
  user: null,

  isAdmin: readOnly('session.data.authenticated.admin'),

  loadCurrentUser() {
    return new Promise((resolve, reject) => {
      const accountId = this.get('session.data.authenticated.userId');
      if (!isEmpty(accountId)) {
        return this.get('store').findRecord('user', accountId).then(account => {
          this.set('user', account);
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  }
});
