import Ember from 'ember';
import layout from '../templates/components/login-form';

const { inject: { service } } = Ember;

export default Ember.Component.extend({
  layout,

  session: service('session'),

  classNames: ['login-form'],

  authenticate() {
    const credentials = this.getProperties('identification', 'password');
    this.get('session').authenticate('authenticator:jwt', credentials).catch((reason) => {
      this.set('errorMessage', reason.error || reason);
    });
  }
});
