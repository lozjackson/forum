import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {

  totalPagesParam: 'meta.total-pages',

  queryParams:{
		search:{
			refreshModel: true
		}
	},

  model(params) {
    if (params.search === '') {
      delete params.search;
    }
    return this.infinityModel("topic", Object.assign(params, { perPage: 24, startingPage: 1 }));
  }
});
