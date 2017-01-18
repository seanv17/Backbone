var app = app || {};

app.singleFlower = Backbone.Model.extend({

  defaults: {
    color: 'red',
    image: 'images/placeholder.jpg'
  },

  // initialize: function(){
  //   console.log( 'A model instance named ' + this.get('name') + ' has been created and it costs $' + this.get('price') );
  //
  //   this.on('change', function(){
  //     console.log('Something in our ' + this.get('name') + ' model instance has just changed');
  //   });
  //
  //   this.on('change:color', function(){
  //     console.log('The color for the ' + this.get('name') + ' model just changed to ' + this.get('color'));
  //   });
  // }

});
