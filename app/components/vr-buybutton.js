import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['buyButton'],

  click: function(){
    this.sendAction();
  }

});
