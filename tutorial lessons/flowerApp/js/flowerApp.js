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
  link: 'rainbowRose'
});

var purpleRoses = new app.singleFlower({
  name: 'Purple Roses',
  price: 19.95,
  color: 'purple',
  link: 'purpleRose'
});

console.log(redRoses.toJSON());
console.log(purpleRoses.toJSON());

blueRoses.set('color', 'dragon');
console.log(blueRoses.toJSON());
