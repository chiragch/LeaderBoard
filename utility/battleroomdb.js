var battleroom = require('../model/battleroom');
var battledb = {};



battledb.getBattlerooms = function () {
    return new Promise((resolve, reject) =>{
        battleroom.find({}).then(function(data) {
            resolve(data);
        }).catch(function(err) {
            console.log("Error:", err);
            return reject(err); 
        });
    });
};


/*userDB.addItemRating = function (itemCode, userId, rating){
    return new Promise((resolve, reject) =>{
        UserProfile.findOne({userId: userId}).then(function(userProfile) {
            for (let index = 0; index < userProfile.userItemList.length; index++) {
                if(itemCode==userProfile.userItemList[index].itemCode){
                    userProfile.userItemList[index].rating = rating;
                }
            }
            userProfile.save();
            resolve(userProfile);
        }).catch(function(err) {
            console.log("Error:", err);
            return reject(err); 
        });
    })
};*/

battledb.updateScore = function (_id,battleroom_id,playerId, new_score){
    return new Promise((resolve, reject) =>{
        
        battleroom.findOne({_id:_id}).then(function(battleroom) {
            console.log("before battleroom" + battleroom);
            battleroom.players[playerId].score = new_score;
            battleroom.save();
            console.log("after battleroom" + battleroom);
            resolve(battleroom);
        }).catch(function(err) {
            console.log("Error:", err);
            return reject(err); 
        });
    })
};


module.exports = battledb;