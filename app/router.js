import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('topic', { path: '/:topic_id' }, function() {
    this.route('edit');
    this.route('new-post');
  });
  this.route('new-topic');
});

export default Router;
