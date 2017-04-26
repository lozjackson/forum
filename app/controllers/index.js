import Ember from 'ember';

const { computed: { sort }, Controller } = Ember;

export default Controller.extend({
  queryParams: ['search'],
  topicSortProperies: ['lastPost:desc'],
  sortedTopics: sort('model', 'topicSortProperies'),
  search: '',
});
