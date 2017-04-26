import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { inject: { service }, Route } = Ember;

export default Route.extend(AuthenticatedRouteMixin, {

  sessionAccount: service(),

  model() {
    return this.store.createRecord('topic', {
      author: this.get('sessionAccount.user')
    });
  }
});
