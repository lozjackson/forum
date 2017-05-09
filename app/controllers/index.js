import Ember from 'ember';

const { computed, computed: { alias, sort }, inject: { controller, service }, Controller, RSVP: { Promise } } = Ember;

export default Controller.extend({
  application: controller(),
  sessionAccount: service(),
  search: '',
  queryParams: ['search'],
  topicSortProperties: ['lastPost:desc'],
  moderatorSortProperties: ['name:asc'],

  sortedTopics: sort('model', 'topicSortProperties'),
  sortedModerators: sort('moderators', 'moderatorSortProperties'),

  moderators: alias('moderator.users'),

  moderator: computed('application.model.roles.@each.name', function () {
    return this.get('application.model.roles').findBy('name', 'moderator');
  })
});
