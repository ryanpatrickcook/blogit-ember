import Ember from 'ember';

export default Ember.Controller.extend({
  editing: false,

  actions: {
    edit: function() {
      this.set('editing', true);
    },
    save: function() {
      this.set('editing', false);
    },
    delete: function() {
      this.set('model.deletedDate', Date.now());
      this.transitionToRoute('posts');
    },
    publish: function() {
      this.set('model.publishDate', Date.now());
    }
  }
});
