var mongoose = require('mongoose');

var schemaOptions = {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
};

var battleSchema = new mongoose.Schema({
    battleroom_id: {type: Number, default: '0000'},
    players: {type: Array, default:[]},
  },schemaOptions);



/*var allbattlerooms = mongoose.model('battleroom', battleSchema);
module.exports.getAllItems = async function(){
  return await new Promise((resolve, reject) => {
      allbattlerooms.find().then(data => {
          resolve(data);
      }).catch(err => {
          return reject(err);
      })
  })
}

module.exports.updateValue = async function(battleroom_id){
  return new Promise((resolve, reject) => {
    allbattlerooms.deleteOne(
      {
         battleroom_id: battleroom_id
      }
    ).catch(err => { return reject(err); });
  });
}
module.exports.addValue = async function(data){
  console.log("data: ", data);
  return new Promise((resolve, reject) => {
    allbattlerooms.updateOne(
      data
    ).catch(err => { return reject(err); });
  });
}*/

module.exports = mongoose.model('battlerooms', battleSchema);
