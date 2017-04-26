import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

const { computed: { readOnly } } = Ember;

export default Model.extend({
  username: attr('string'),
  topics: hasMany('topic', { async: true }),
  posts: hasMany('post', { async: true }),

  name: readOnly('username')
});
