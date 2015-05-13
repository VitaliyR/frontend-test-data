import DS from 'ember-data';

export default DS.Model.extend({

  title: DS.attr('string'),
  quantity: DS.attr('number'),
  category_id: DS.belongsTo('category', { async: true }),
  gallery_id: DS.belongsTo('gallery', { async: true }),
  price: DS.attr('number'),
  description: DS.attr('string'),

  expanded: false,

  // in the shop
  qty: function(){
    return this.get('qtyMin');
  }.property('qtyMin'),

  qtyMin: function(){
    return (this.get('qtyMax') > 0) * 1;
  }.property('qtyMax'),

  qtyMax: function(){
    return this.get('quantity') - (this.get('basket.qty') || 0);
  }.property('basket.qty', 'quantity'),

  /*_qtyUpdate: function(){
    if (!this.get('qtyMin')){
      this.set('qty', 0);
    }
  }.observes('basket.qty', 'qtyMin'),*/

  basket: DS.belongsTo('item', { async: true })

});
