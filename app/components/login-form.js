import Ember from 'ember';
import layout from '../templates/components/login-form';
import { hex_sha512 } from 'ember-sha512';

const { inject: { service } } = Ember;

export default Ember.Component.extend({
  layout,

  session: service('session'),

  classNames: ['login-form'],

  authenticate() {
    const { identification, password } = this.getProperties('identification', 'password');
    if (!identification || !password) { return; }
    this.get('session').authenticate('authenticator:oauth2', identification, hex_sha512(password)).catch((reason) => {
      this.set('errorMessage', reason.error || reason);
    });
  }
});
