import Ember from 'ember';

export default Ember.Component.extend({
  editing: false,

  actions: {
    edit: function() {
      this.set('editing', true);
    },
    save: function() {
      this.set('editing', false);
    },
    delete: function() {
      this.set('post.deletedDate', Date.now());
      this.sendAction('postDeleted');
    },
    publish: function() {
      this.set('post.publishDate', Date.now());
    }
  }
});
