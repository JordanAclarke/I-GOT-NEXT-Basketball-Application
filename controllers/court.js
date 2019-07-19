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
const courtApi = require('../models/court.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const courtRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
courtRouter.get('/', (req, res) => {
  courtApi.getAllCourts()
    .then((courts) => {
      res.json(courts)
    })
})

courtRouter.get('/:courtId', (req, res) => {
  courtApi.getCourt(req.params.courtId)
    .then((court) => {
      res.json(court)
    })
    .catch((err) => {
      console.log(err)
    })
})

courtRouter.post('/', (req, res) => {
  courtApi.addNewCourt(req.body)
    .then((court) => {
      res.json(court)
    })
})

courtRouter.put('/:courtId', (req, res) => {
  courtApi.updateCourt(req.params.courtId, req.body)
    .then((updatedCourt) => {
      res.json(updatedCourt)
    })
})

courtRouter.delete('/:courtId', (req, res) => {
  courtApi.deleteCourt(req.params.courtId)
    .then((deletedCourt) => {
      res.json(deletedCourt)
    })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  courtRouter
}
