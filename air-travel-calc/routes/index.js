var express = require('express');
var air_calculator = require('../public/javascripts/logic.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function (req, res, next) {
  var departureCity = req.body.departure_city;
  var arrivalCity = req.body.arrival_city;
  var checkedBags = req.body.checked_bags;
  var cabinC = req.body.cabin_class;
  var wifiCost = req.body.wifi;
  var promoCode = req.body.promo_code;

  res.render('index', {result: air_calculator.total_expense(departureCity, arrivalCity, checkedBags, cabinC, wifiCost, promoCode)});
  // get params
  // send params to you calculator function in logic.js var result = calculateFare(dep, arr, bags)
  // pass an object as your second argument in render res.render('results', results: result })

});

module.exports = router;
