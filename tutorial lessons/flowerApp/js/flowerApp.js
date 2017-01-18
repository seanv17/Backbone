var redRoses = new app.singleFlower({
  name: 'Red Roses',
  price: 29.99,
  image: 'images/placeholder.jpg',
  link: 'redRose'
});

var blueRoses = new app.singleFlower({
  name: 'Blue Roses',
  price: 39.99,
  color: 'blue',
  link: 'blueRose'
});

var purpleRoses = new app.singleFlower({
  name: 'Purple Roses',
  price: 19.95,
  color: 'purple',
  link: 'purpleRose'
});

var tantilizingTulips = new app.singleFlower({
  name: 'Tantilizing Tulips',
  price: 29.99,
  color: 'orange',
  link: 'orange'
});

var fleurDeLis = new app.singleFlower({
  name: 'Fleur-de-lis',
  price: 39.99,
  color: 'burgandy',
  link: 'burgandy'
});

var flowerGroup = new app.flowerGroup([
  redRoses, blueRoses, purpleRoses, fleurDeLis
]);

var europeanFlowers = new app.europeanFlowers([
  tantilizingTulips, fleurDeLis, redRoses
]);

var flowerGroupView = new app.allFlowersView({ collection: flowerGroup});

$('#allFlowers').html(flowerGroupView.render().el);

var flowerRouter = new app.Router();

Backbone.history.start();

// var europeanFlowersGroupView = new app.allFlowersView({ collection: europeanFlowers});
//
// $('#allFlowers').html(europeanFlowersGroupView.render().el);

// EuropeanFlower.set([tantilizingTulips, fleurDeLis, purpleRoses]);
// flowerGroup.set([blueRoses, fleurDeLis]);
// tantilizingTulips.set('originCountry', 'Holland');
//
// console.log(EuropeanFlower.toJSON());
// console.log(flowerGroup.toJSON());

// console.log(flowerGroup.toJSON());
// flowerGroup.remove(purpleRoses);
// console.log(flowerGroup.toJSON());

// console.log(redRoses.toJSON());
// console.log(purpleRoses.toJSON());
//
// blueRoses.set('color', 'dragon');
// console.log(blueRoses.toJSON());
