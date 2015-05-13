import Ember from 'ember';

var numberTest = /^[0-9]*$/;

export default Ember.Component.extend({

  min: -Number.MAX_VALUE,
  max: Number.MAX_VALUE,

  classNames: ['numberfield'],

  initiator: function(){
    var input;

    this.set('input', input = this.$('input'));

    input.on('keyup', this._keyupHandler.bind(this));

  }.on('didInsertElement'),

  _validationUpdate: function(){
    var min, max;

    if (this.get('value') < (min = this.get('min'))){
      this.set('value', min);
    }

    if (this.get('value') > (max = this.get('max'))){
      this.set('value', max);
    }
  }.observes('min', 'max'),

  _keyupHandler: function(){
    var input = this.get('input');
    this.changeValue(input.val());
  },

  changeValue: function(value){
    var currentValue = this.get('value');
    var max = this.get('max');
    var min = this.get('min');
    var result = false;

    value *= 1;

    result =
      numberTest.test(value) &&
        value <= max &&
        value >= min
    ;

    value = result ? value : currentValue;
    this.set('value', value);
    this.input.val(value);
  },

  actions: {
    increment: function(value){
      value *= 1;
      this.changeValue(this.get('value') + value);
    }
  }

});
