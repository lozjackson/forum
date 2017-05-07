import Ember from 'ember';
import UserProfileController from 'forum/controllers/user-profile';
import getErrorResponse from 'forum/utils/get-error-response';

const { computed, computed: { alias }, inject: { service } } = Ember;

export default UserProfileController.extend({

  ajax: service(),
  dialog: service(),
  sessionAccount: service(),

  roles: alias('changeset.roles'),

  admin: computed('roles.@each.name', {
    get() {
      return this.get('roles').findBy('name', 'admin');
    },
    set(key, value) {
      this.manageRole(value?'add':'remove', 'admin');
      return value;
    }
  }),

  addRole(name) {
    this.manageRole('add', name);
  },

  removeRole(name) {
    this.manageRole('remove', name);
  },

  manageRole(action, name) {
    const url = `/users/${ this.get('model.id') }/${ action }-role`;
    this.get('ajax').put({ url, data: { name } }).then((data) => {
      this.store.pushPayload(data);
    }, (error) => this.get('dialog').alert({ title: 'Error', body: getErrorResponse(error) }));
  }
});
