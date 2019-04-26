var express = require('express');
var router = express.Router();
var battleDb = require('../utility/battleroomdb');
var mongoose = require('mongoose');
//connect to database - if it does not exist it will be created

router.get('/', function (request, response, next) {
    response.render("index");
});

router.post('/leader',async function(req, res, next){
  data = await battleDb.getBattlerooms();
  res.render("random", data);
})

router.post('/random',async function(req, res, next){
  data = await battleDb.getBattlerooms();
  for(var i=0;i<data.length;i++){
    for(var j=0;j<data[i].players.length;j++){
      var battleroom_id = data[i].battleroom_id;
      var _id =  data[i]._id
      //var playeId = data[i].players[j].playerId;
      var retrieve  = data[i].players[j].score;
      var new_score = retrieve + Math.floor(Math.random() * (+500 - +10) + +10);
      battleDb.updateScore(_id,battleroom_id,j,new_score);
       data = await battleDb.getBattlerooms();
       console.log("final one" + data);
    }
    
  }
})



module.exports = router;
