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
const CourtSchema = new mongoose.Schema({
 gymName: String,
 address: String,
 numberOfPlayers: String,
 entryPrice: String,
//  players: [{
//    type: mongoose.Schema.Types.ObjectId,
//    ref: "Player"
//  }]
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const CourtCollection = mongoose.model('Court', CourtSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllCourts() {
  return CourtCollection.find()
}
function getAllPlayers() {
  return CourtCollection.find()
}

function getCourt(courtId) {
  return CourtCollection.findById(courtId).populate('players')
}

function addNewCourt(courtObject) {
  return CourtCollection.create(courtObject)
}

function updateCourt(courtId, updatedCourt) {
  return CourtCollection.findByIdAndUpdate(courtId, updatedCourt, {new: true})
}

function deleteCourt(courtId) {
  return CourtCollection.findByIdAndDelete(courtId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllCourts,
  getCourt,
  addNewCourt,
  updateCourt,
  deleteCourt
}
