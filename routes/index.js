var express = require('express');
var router = express.Router();
var geocoder = require('geocoder');

/* GET home page. */
router.get('/', function(req, res, next) {
  geocoder.geocode("Dundee, Scotland", function(err, data){
    var location = data.results[0].geometry.location
    res.render('index', { title: 'Express', location: location });
  })
});

module.exports = router;
