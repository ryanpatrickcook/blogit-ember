import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var params = {
        title: this.get('title'),
        body: this.get('body')
      };

      var post = this.store.createRecord('post', params);
      this.send('addPost', post);

      /* Reset Form Fields */
      this.set('title', '');
      this.set('body', '');

      this.transitionToRoute('posts');
    },
    cancel: function() {
      this.transitionToRoute('posts');
    }
  }
});
