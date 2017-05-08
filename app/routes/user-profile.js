import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { inject: { service }, Route } = Ember;

export default Route.extend(AuthenticatedRouteMixin, {

  sessionAccount: service(),

  breadCrumb: { title: 'User Profile' },

  model() {
    return this.get('sessionAccount.user');
  }
});
