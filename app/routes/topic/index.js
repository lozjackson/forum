import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {

  totalPagesParam: 'meta.total-pages',

  model(params, transition) {
    return this.infinityModel("post", Object.assign(params, {
      topic: transition.params.topic.topic_id,
      perPage: 5,
      startingPage: 1
    }));
  }
});
