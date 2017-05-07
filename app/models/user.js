import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  username: attr('string'),
  name: attr('string'),
  email: attr('string'),
  disabled: attr('boolean'),

  topics: hasMany('topic', { async: true }),
  posts: hasMany('post', { async: true }),
  roles: hasMany('role', { async: true })
});
