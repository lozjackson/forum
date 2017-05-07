import Ember from 'ember';

const { computed: { sort }, Component } = Ember;

export default Component.extend({
  classNames: ['select-user'],
  userSortProperties: ['username:asc', 'createdAt:asc'],
  users: sort('model', 'userSortProperties')
});
