var express = require('express');
var router = express.Router();
var firebase = require("firebase");
var fbRef = new Firebase("https://https://historic12.firebaseio.com/locations");
var fakeData = [
  {name: 'location1', description: 'location', year: 1750},
  {name: 'location1', description: 'location', year: 1750},
  {name: 'location1', description: 'location', year: 1750},
  {name: 'location1', description: 'location' , year: 1750}
  ];
/* GET home page. */
router.get('/locations', function(req, res, next) {
  res.json({ locations: fakeData });
});
router.post('/locations', function(req, res, next) {
  fbRef.push(req.body);
  res.json(req.body);
});

module.exports = router;
