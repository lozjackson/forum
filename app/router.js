import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('new-topic');
  this.route('topic', { path: '/:topic_id' }, function() {
    this.route('edit');
    this.route('new-post');
    this.route('edit-post', { path: '/:post_id' });
  });
  this.route('user-profile', function() {
    this.route('change-password');
  });
  this.route('admin', function() {
    this.route('users', function() {
      this.route('user', { path: '/:user_id' }, function() {
        this.route('change-password');
        this.route('add-role');
      });
    });
    this.route('roles', function() {
      this.route('role', { path: '/:role_id' });
    });
  });
});

export default Router;
