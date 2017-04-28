var express = require('express');
var router  = express.Router();
var path    = require('path');

// var fs      = require('fs');
// var xlsx    = require('node-xlsx');
// var arraya  = xlsx.parse(path.join(__dirname, '..', 'files', 'ejemplo.xlsx'));
// var arrayb  = xlsx.parse(fs.readFileSync(path.join(__dirname, '..', 'files', 'ejemplo.xlsx')));


var xlsxj = require("xlsx-to-json");

/* GET home page. */

router.get('/', function(req, res, next) {
  xlsxj({
    input: path.join(__dirname, '..', 'files', 'ejemplo.xlsx'),
    output: "output.json"
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  });

  res.render('index', { title: 'Express' });
});

module.exports = router;
