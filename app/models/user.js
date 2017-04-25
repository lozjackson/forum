import Model from 'ember-data';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  username: attr('string'),
  topics: hasMany('topic', { async: true }),
  posts: hasMany('post', { async: true }),
});
