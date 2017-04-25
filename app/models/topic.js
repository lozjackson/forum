import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

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
});
