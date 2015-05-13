import DS from 'ember-data';

export default DS.Model.extend({

  product: DS.belongsTo('product'),

  qtyMin: function(){
    return (this.get('qtyMax') > 0) * 1;
  }.property('qtyMax'),

  qtyMax: function(){
    return this.get('product.quantity') - this.get('qty');
  }.property('qty', 'product.quantity'),

  // in the basket
  qty: DS.attr('number', { defaultValue: 0 })

});
