import JWTAuthenticator from 'ember-simple-auth-token/authenticators/jwt';

export default JWTAuthenticator.extend({
  getAuthenticateData(/*credentials*/) {
    const auth = this._super(...arguments);
    return { auth };
  },
});
