import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('posts', function() {
    this.route('new');
  });
  this.route('about');
  this.route('post', {path: '/post/:id'});
});
