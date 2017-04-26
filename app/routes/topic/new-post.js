import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { inject: { service }, Route } = Ember;

export default Route.extend(AuthenticatedRouteMixin, {

  sessionAccount: service(),

  model() {
    const topic = this.modelFor('topic');
    return this.store.createRecord('post', {
      author: this.get('sessionAccount.user'),
      topic
    });
  }
});
