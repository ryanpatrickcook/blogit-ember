import DS from 'ember-data';
import Ember from 'ember';

var Post = DS.Model.extend({
    title: DS.attr('string'),
    body: DS.attr('string'),
    publishDate: DS.attr('date'),
    createdDate: DS.attr('date'),
    deletedDate: DS.attr('date'),

    isDeleted: function() {
      return Ember.isPresent( this.get('deletedDate') );
    }.property('deletedDate'),

    isPublished: function() {
      return Ember.isPresent( this.get('publishDate') );
    }.property('publishDate'),

    exerpt: function() {
      var limit = 110;
      if( this.get("body.length") > limit ) {
        return this.get('body').substring(0, limit) + "...";
      }
      else {
        return this.get('body');
      }
    }.property('body')
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Ember.js",
      body: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
      author: "Joe",
      createdAt: '2014-10-27T11:00:00',
      isPublished: false
    }, {
      id: 2,
      title: "Eiffel Tower",
      body: "This has information about the Eiffel Tower",
      author: "Tom",
      createdAt: '2014-10-27T12:54:01',
      isPublished: false
    }, {
      id: 3,
      title: "The Tomster",
      body: "Is it a Hamster or a Person. It's hard to tell sometimes.",
      author: "Joe",
      createdAt: '2014-10-27T12:54:01',
      isPublished: false
    }, {
      id: 4,
      title: "Hello, world!",
      body: "This is an example to show the potential of an offcanvas layout pattern in Bootstrap. Try some responsive-range viewport sizes to see it in action.",
      author: "Ryan",
      promoted: true,
      createdAt: Date.now(),
      isPublished: true
    }
  ]
});

export default Post;