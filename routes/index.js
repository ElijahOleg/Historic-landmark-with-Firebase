var express = require('express');
var router = express.Router();
var firebase = require("firebase");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/", function(req, res){
  console.log(req.body.degrees);
  redirect("/", {

  })
});
module.exports = router;
