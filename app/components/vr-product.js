import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['product'],
  classNameBindings: ['descriptionEmpty', 'product.expanded'],

  descriptionEmpty: false,
  expanded: false,

  initiator: function(){
    if (!this.get('product.description').trim()){
      this.toggleProperty('descriptionEmpty');
    }

  }.on('didInsertElement'),

  actions: {
    expandDescription: function(){
      if (!this.get('descriptionEmpty')){
        this.toggleProperty('product.expanded');
        this.sendAction('expandedProduct', this.get('product'));
      }
    },

    addToCart: function(){
      this.sendAction('addToCart', this.get('product'));
    }
  }

});
