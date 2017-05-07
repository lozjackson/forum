import Ember from 'ember';

const { inject: { service }, isEmpty, RSVP: { Promise } } = Ember;

export default Ember.Service.extend({

  session: service(),
  store: service(),
  user: null,

  loadCurrentUser() {
    return new Promise((resolve, reject) => {
      const token = this.get('session.data.authenticated.token');
      if (isEmpty(token)) { resolve(); }
      const tokenData = this.getTokenData(token);
      if (tokenData.user) {
        this.set('isAdmin', tokenData.admin);
        return this.get('store').findRecord('user', tokenData.user).then(account => {
          this.set('user', account);
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  },

  getTokenData(token) {
    const payload = token.split('.')[1];
    const tokenData = decodeURIComponent(window.escape(atob(payload)));

    try {
      return JSON.parse(tokenData);
    } catch (e) {
      return tokenData;
    }
  },
});
