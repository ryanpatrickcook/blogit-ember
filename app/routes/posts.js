import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('post').then(function(response) {
      return response.filterBy('isDeleted', false);
    });
  },
  actions: {
    savePost: function(data) {
      var post = this.store.createRecord('post', data);

      var posts = this.controllerFor('posts');
      posts.get('model').pushObject(post);
    },
    deletePost: function(post) {
      post.set('deletedDate', Date.now);

      var posts = this.controllerFor('posts');
      posts.get('model').removeObject(post);
    }
  }
});
