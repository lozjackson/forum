import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

const { computed } = Ember;
const { alias } = computed;

export default Model.extend({
  createdAt: 	attr('string', { defaultValue: function () {
    return new Date().toISOString();
  }}),
  updatedAt: attr('string', { defaultValue: function () {
    return new Date().toISOString();
  }}),
  body: attr('string'),
  user: belongsTo('user', { async: true }),
  topic: belongsTo('topic', { async: true }),

  author: alias('user'),

  edited: computed('created', 'modified', function () {
    return this.get('modified') > this.get('created');
  })
});
