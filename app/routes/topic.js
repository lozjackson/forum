import Ember from 'ember';

const { computed, Route } = Ember;

export default Route.extend({
  breadCrumb: computed('controller.model.title', function () {
    return { title: this.controller.get('model.title') || 'Untitled' }
  })
});
