import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

const { computed } = Ember;
const { mapBy } = computed;

export default Model.extend({
  created: 	attr('string', { defaultValue: function () {
    return new Date().toISOString();
  }}),
  modified: attr('string', { defaultValue: function () {
    return new Date().toISOString();
  }}),
  title: attr('string'),
  body: attr('string'),
  author: belongsTo('user', { async: true }),
  posts: hasMany('post', { async: true }),

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
