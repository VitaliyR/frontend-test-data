import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['buyButton'],

  classNameBindings: ['disabled'],

  price: function(){
    return (this.get('item.price') * (this.get('item.qty') || 1)).toFixed(2);
  }.property('item.price', 'item.qty'),

  _disabled: function(){
    this.set('disabled', !this.get('item.qty'));
  }.observes('item.qty').on('init'),

  click: function(){
    this.sendAction();
  }

});
