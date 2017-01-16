var app = app || {};

app.singleFlower = Backbone.Model.extend({

  defaults: {
    color: 'red',
    img: 'images/placholder.jpg'
  },

  initialize: function(){
    console.log( 'A model instance named ' + this.get('name') + ' has been created and it costs $' + this.get('price') );

    this.on('change', function(){
      console.log('Something in our model has changed');
    });

    this.on('change:color', function(){
      console.log('The color for the ' + this.get('name') + ' model just changed to ' + this.get('color'));
    });
  }

});
