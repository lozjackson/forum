import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

const { computed } = Ember;
const { alias, mapBy } = computed;

export default Model.extend({
  createdAt: 	attr('string', { defaultValue: function () {
    return new Date().toISOString();
  }}),
  updatedAt: attr('string', { defaultValue: function () {
    return new Date().toISOString();
  }}),
  title: attr('string'),
  body: attr('string'),
  user: belongsTo('user', { async: true }),
  posts: hasMany('post', { async: true }),

  author: alias('user'),
  created: alias('createdAt'),
  modified: alias('updatedAt'),

  postDates: mapBy('posts', 'created'),

  edited: computed('created', 'modified', function () {
    return this.get('modified') > this.get('created');
  }),

  lastPost: computed('postDates', 'created', function () {
    const postDates = this.get('postDates');
    if (!postDates.get('length')) {
      return this.get('created');
    }
    return postDates.sort().get('lastObject');
  })
});
