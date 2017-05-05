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
    this.route('edit-post', { path: '/:post_id' });
  });
  this.route('new-topic');
  this.route('login');
  this.route('register');
  this.route('user-profile');
});

export default Router;
