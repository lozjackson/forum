import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { inject: { service }, Route } = Ember;

export default Route.extend(ApplicationRouteMixin, {
  sessionAccount: service('session-account'),

  beforeModel() {
    return this._loadCurrentUser();
  },

  model() {
    return { roles: this.store.findAll('role') };
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser().catch(() => this.get('session').invalidate());
  },

  _loadCurrentUser() {
    return this.get('sessionAccount').loadCurrentUser();
  },

  _logout() {
    this.get('session').invalidate();
  },

  actions: {

    logout() {
      this._logout();
    }
  }
});
