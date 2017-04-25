import Model from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

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
});
