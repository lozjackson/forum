import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const topic = this.modelFor('topic');
    return this.store.createRecord('post', { topic });
  }
});
