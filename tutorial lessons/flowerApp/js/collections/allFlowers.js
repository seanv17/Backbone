var app = app || {};

app.EuropeanFlowers = Backbone.Collection.extend({

  model: app.singleFlower,

  initialize: function(){
    this.on('change', function(){
      console.log('Something in our ' +  this.get('name') + ' collection has changed');
    });
  }
});

app.flowerGroup = Backbone.Collection.extend({

  model: app.singleFlower,

  initialize: function(){
    this.on('change', function(){
      console.log('Something in our ' + this.get('name') + ' collection instance has changed');
    });
  }
});
