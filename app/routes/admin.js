import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { inject: { service } } = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  sessionAccount: service(),

  beforeModel() {
    if (!this.get('sessionAccount.isAdmin')) {
      this.transitionTo('index');
    }
    return this._super(...arguments);
  }
});
