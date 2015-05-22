import Ember from 'ember';

export default Ember.ArrayController.extend({

  sortModes: [
    {
      text: 'None',
      value: ''
    },
    {
      text: 'By price in Ascending order',
      value: 'asc'
    },
    {
      text: 'By price in Descending order',
      value: 'des'
    }
  ],

  sort: '',

  expandedProduct: null,

  _sortDidChanged: function(){
    var sort = this.get('sort');

    if (!sort){
      this.set('sortProperties', []);
    }else{
      this.set('sortProperties', ['price']);
      this.set('sortAscending', sort === 'asc');
    }

  }.observes('sort'),

  actions: {

    addToCart: function(product){
      var self = this;
      var addQty = product.get('qty');

      if (!addQty){
        return;
      }

      this.store.find('item', { product: product.get('id') }).then(function(basketModel){
        basketModel = basketModel.get('firstObject');

        basketModel.set('qty', basketModel.get('qty') + addQty);
        basketModel.save();
      }, function(){
        var basketModel;

        basketModel = self.store.createRecord('item', {
          product: product,
          qty: addQty
        });
        basketModel.save();
      });
    },

    expandedProduct: function(product){
      var prevExpanded = this.get('expandedProduct');

      if (prevExpanded && prevExpanded !== product){
        prevExpanded.set('expanded', false);
      }

      this.set('expandedProduct', product);
    }
  }

});
