import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

const { computed } = Ember;

export default Model.extend({
  created: 	attr('string', { defaultValue: function () {
    return new Date().toISOString();
  }}),
  modified: attr('string', { defaultValue: function () {
    return new Date().toISOString();
  }}),
  body: attr('string'),
  author: belongsTo('user', { async: true }),
  topic: belongsTo('topic', { async: true }),

  edited: computed('created', 'modified', function () {
    return this.get('modified') > this.get('created');
  })
});
