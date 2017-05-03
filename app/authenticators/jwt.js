import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
const { RSVP: { Promise }, $: { ajax }, run } = Ember;
export default Base.extend({

  tokenEndpoint: `/login`,

  restore(data) {
    return new Promise((resolve, reject) => {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(creds) {
    const { identification, password } = creds;
    const data = JSON.stringify({
      auth: {
        username: identification,
        password
      }
    });
    const requestOptions = {
      url: this.tokenEndpoint,
      type: 'POST',
      data,
      contentType: 'application/json',
      dataType: 'json'
    };
    return new Promise((resolve, reject) => {
      ajax(requestOptions).then((response) => {
        const { jwt } = response;
        // Wrapping aync operation in Ember.run
        run(() => {
          resolve({
            token: jwt
          });
        });
      }, (error) => {
        // Wrapping aync operation in Ember.run
        run(() => {
          reject(error);
        });
      });
    });
  },

  invalidate(data) {
    return Promise.resolve(data);
  }
});
