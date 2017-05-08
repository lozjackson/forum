import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

const { computed, Route } = Ember;

export default Route.extend(InfinityRoute, {

  breadCrumb: computed('controller.topic.model.title', function () {
    return { title: this.controller.get('topic.model.title') || 'Untitled' }
  }),

  totalPagesParam: 'meta.total-pages',

  model(params, transition) {
    return this.infinityModel("post", Object.assign(params, {
      topic: transition.params.topic.topic_id,
      perPage: 5,
      startingPage: 1
    }));
  }
});
