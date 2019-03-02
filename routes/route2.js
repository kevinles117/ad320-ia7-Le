var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
var fs = require("fs");
var obj = require("../colors.json");

var arr = obj.colors;



router.get('/all', function(req,res){
    res.send(arr);

});

router.get('/:color', function(req,res,next){

  var index = -1;
  var col = req.params.color.toLowerCase().toString();
  var filteredObj = arr.find(function(item,i){
    if(item.color === col){
      index = i;
      return index;
    }
  });
  if (index === -1){
    res.status(404).send('Error 404: Not found');
  }
  else{res.send(arr[index]);}


});

module.exports = router;
