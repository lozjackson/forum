import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  breadCrumb: {},
  afterModel(model) {
    this._super(...arguments);
    this.set('breadCrumb', { title: model.get('title') });
  }
});
