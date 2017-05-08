import Ember from 'ember';

const { computed, computed: { alias, sort }, inject: { service }, Controller } = Ember;

export default Controller.extend({
  sessionAccount: service(),
  search: '',
  queryParams: ['search'],
  topicSortProperties: ['lastPost:desc'],
  moderatorSortProperties: ['name:asc'],

  sortedTopics: sort('model', 'topicSortProperties'),
  sortedModerators: sort('moderators', 'moderatorSortProperties'),

  moderators: alias('moderator.users'),

  moderator: computed(function () {
    return this.store.queryRecord('role', { name: 'moderator' });
  })
});
