import Ember from 'ember';

const { computed: { sort }, Controller } = Ember;

export default Controller.extend({
  search: '',
  queryParams: ['search'],
  topicSortProperies: ['lastPost:desc'],
  sortedTopics: sort('model', 'topicSortProperies')
});
