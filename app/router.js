import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('posts');
  this.route('about');
  this.resource('post', {path: '/post/:id'}, function() {
    this.route('new');
    this.route('edit');
  });
});
