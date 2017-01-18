var app = app || {};

app.Router = Backbone.Router.extend({

routes :{
  '': 'noCopy',
  'blueRose': 'blueRoseMessage',
  'purpleRose': 'purpleRoseMessage',
  'redRose': 'redRoseMessage'
},

noCopy: function(){
  $('#copy').html('');
},

blueRoseMessage: function(){
  $('#copy').html('Blue Roses are grrrreeaatttt');
},

purpleRoseMessage: function(){
  $('#copy').html('Choose purple roses...');
},

redRoseMessage: function(){
  $('#copy').html('Red rainbow roses...');
},

});
