/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */


/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const PlayerSchema = new mongoose.Schema({
 name: String,
 ageGroup: String,
 positon: String,
 bio: String,
 courtId: {
   type: mongoose.Schema.Types.ObjectId,
   required: true
 }
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const PlayerCollection = mongoose.model('Player', PlayerSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllPlayers() {
  return PlayerCollection.find()
}

function getPlayer(playerId) {
  return PlayerCollection.findById(playerId)
}

function getPlayersByCourtId(courtId) {
  return PlayerCollection.find({courtId})
}

function addPlayer(playerObject) {
  return PlayerCollection.create(playerObject)
}

function deletePlayer(playerId) {
  return PlayerCollection.findByIdAndDelete(playerId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllPlayers,
  getPlayer,
  getPlayersByCourtId,
  addPlayer,
  deletePlayer
}
