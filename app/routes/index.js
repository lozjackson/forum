import Ember from 'ember';

export default Ember.Route.extend({

  queryParams:{
		search:{
			refreshModel: true
		}
	},

  model(params) {
    if (params && params.search) {
      return this.store.query('topic', params);
    }
    return this.store.findAll('topic');
  }
});
