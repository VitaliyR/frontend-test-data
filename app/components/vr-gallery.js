import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['gallery'],

  initiator: function(){
    var self = this;

    this.get('gallery').then(function(gallery){
      var images = gallery.get('images');

      if (!images.length){
        self.$().hide();
      }else{
        self._buildUrls();
        self.set('logo', self.get('images.0'));

        if (images.length <= 3){
          self.$().find('.left, .right').hide();
        }
      }

    });
  }.on('didInsertElement'),

  _buildUrls: function(){
    var gallery = this.get('gallery');
    var images = gallery.get('images');
    var urls = [];

    for (var i = 0, maxI = images.length; i < maxI; i++){
      urls.push(
        '/' + ['images', gallery.get('id'), images[i]].join('/')
      );
    }

    this.set('images', urls);
  },

  actions: {
    changeLogo: function(image){
      this.set('logo', image);
    },

    slide: function(direction){
      var thumbs = this.$().find('.thumbs');
      var image = thumbs.find('img:first');
        var imageSize = thumbs.find('img:last').outerWidth(true);
      var imagesCount = Math.ceil(thumbs.width() / imageSize);
      var defaultMargin = this.get('imageMargin');

      if (!defaultMargin){
        defaultMargin = parseInt(image.css('margin-left'));
        this.set('imageMargin', defaultMargin);
      }

      var margin = parseInt(image.css('margin-left'));
      var maxMargin = ((-1) * ((this.get('images').length - imagesCount) * imageSize)) + defaultMargin;

      if (direction === 'left' && margin === defaultMargin){
        return;
      }

      if (direction === 'right' && margin === maxMargin){
        return;
      }

      margin += direction === 'left' ? imageSize : (-1) * imageSize;

      image.css('margin-left', margin);
    }
  }

});
