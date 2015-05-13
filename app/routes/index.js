import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    var self = this;
    return this.store.findAll('product').then(function(products){
      self.set('model', products);

      return self.store.findAll('item').then(function(items){
        self.set('basket', items);
      });
    });
  },

  setupController: function(controller){
    controller.set('model', this.get('model'));
    controller.set('basket', this.get('basket'));
  }

});
