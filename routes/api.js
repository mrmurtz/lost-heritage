var express = require('express');
var router = express.Router();
var locations = require('../data/locations.json');

router.get('/api', function(req, res) {
    res.json(locations);
});

module.exports = router;
