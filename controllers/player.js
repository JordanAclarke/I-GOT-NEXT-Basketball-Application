/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const playerApi = require('../models/player.js')

const courtApi = require('../models/court.js')
/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const playerRouter = express.Router({mergeParams: true})

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
playerRouter.get('/', (req, res) => {
  let courtId = req.params.courtId
  playerApi.getPlayersByCourtId(courtId)
  .then((players) => {
    res.json(players)
  })
})

playerRouter.get('/:playerId', (req, res) => {
  playerApi.getPlayer(req.params.playerId)
  .then((player) => {
    res.json(player)
  })
})

playerRouter.get('/byCourtId/:courtId', (req, res) => {
  playerApi.getPlayersByCourtId(req.params.courtId)
  .then((player) => {
    res.json(player)
  })
})

// playerRouter.get('/:courtId', (req, res) => {
  
// })

playerRouter.post('/byCourtId/:courtId', (req, res) => {
  // let courtId = req.params.courtId

  playerApi.addPlayer(req.body)
  .then((player) => {
    res.json(player)
  })
  .catch((err) => {
    console.log(err)
  })
})

playerRouter.delete('/:playerId', (req, res) => {
  playerApi.deletePlayer(req.params.playerId)
  .then((deletedPlayer) => {
    res.json(deletedPlayer)
  })
  .catch((err) => {
    console.log(err)
  })
})
/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  playerRouter
}
