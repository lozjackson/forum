import Ember from 'ember';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

const { getOwner } = Ember;
const { RESTAdapter } = DS;

export default RESTAdapter.extend(DataAdapterMixin, {
  namespace: 'ForumRestAPI/server.php',

  authorizer: 'authorizer:oauth2',

  /**
    Check if the access token has expired before making an ajax request
  */
  ajax() {
    const session = this.get('session');
    const _super = this._super;
    if (new Date().getTime() > session.get('data.authenticated.expires_at')) {
      const refreshToken = session.get('data.authenticated.refresh_token');
      if (!refreshToken) { return this._super(...arguments); }
      const expiresIn = session.get('data.authenticated.expires_in');
      const authenticator = getOwner(this).lookup(session.get('data.authenticated.authenticator'));
      return authenticator._refreshAccessToken(expiresIn, refreshToken).then(() => {
        return _super.apply(this, arguments);
      });
    } else {
      return this._super(...arguments);
    }
  }
});
