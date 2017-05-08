import Ember from 'ember';
const { inject: { service }, $: { ajax }, RSVP: { Promise } } = Ember;

export default Ember.Service.extend({

  session: service(),

  ajax({ url, data, success, type }) {
    return new Promise((resolve) => {
      this.get('session').authorize('authorizer:token', (headerName, headerValue) => {
        resolve(ajax({
          url,
          type,
          contentType: 'application/json;charset=utf-8',
          dataType: 'json',
          headers: { [headerName]:headerValue },
          data: JSON.stringify(data),
          success
        }));
      });
    });
  },

  put({ url, data, success }) {
    return this.ajax({ url, data, type: 'PUT', success});
  }
});
