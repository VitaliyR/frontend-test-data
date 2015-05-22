import Ember from 'ember';

export default Ember.Component.extend({

  visible: true,

  classNames: ['basket'],
  classNameBindings: ['empty'],

  maxQtyUI: 99,

  total: function(){
    var sum = this.get('basket').reduce(function(prev, item){
      return prev + (item.get('product.price') * item.get('qty'));
    }, 0);

    return sum.toFixed(2);
  }.property('basket.@each.qty'),

  inCart: function(){
    var sum = this.get('basket').reduce(function(prev, item){
      return prev + item.get('qty')
    }, 0);

    var maxQtyUI = this.get('maxQtyUI');

    if (sum > maxQtyUI){
      sum = maxQtyUI + '+';
    }

    return sum;
  }.property('basket.@each.qty'),

  remove: function(){
    this.get('basket').filterBy('qty', 0).forEach(function(item){
      item.destroyRecord();
    });
  }.observes('basket.@each.qty'),

  empty: Ember.computed.equal('basket.length', 0)

});
