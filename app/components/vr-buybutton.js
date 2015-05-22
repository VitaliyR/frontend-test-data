import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['buyButton'],

  price: function(){
    return this.get('item.price').toFixed(2);
  }.property('item.price'),

  click: function(){
    this.sendAction();
  }

});
