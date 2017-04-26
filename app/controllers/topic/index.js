import Ember from 'ember';

const { computed, inject: { service }, Controller, RSVP: { Promise } } = Ember;

export default Controller.extend({

  sessionAccount: service(),

  canEditTopic: computed('model.author', 'sessionAccount.user', function () {
    return new Promise(resolve => {
      this.get('model.author').then(author => resolve(author === this.get('sessionAccount.user')));
    });
  }),

  edit() {
    this.transitionToRoute('topic.edit');
  }
});
