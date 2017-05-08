import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { computed, Route } = Ember;

export default Route.extend(AuthenticatedRouteMixin, {
  breadCrumb: computed('controller.model.username', function () {
    return { title: this.controller.get('model.username') || 'Untitled' }
  })
});
