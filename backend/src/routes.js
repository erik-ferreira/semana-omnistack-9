const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const ProfileController = require('./controllers/ProfileController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.get('/sessions', SessionController.index)
routes.post('/sessions', SessionController.store)

routes.get('/spots', SpotController.index)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)
routes.get('/spots/everyone', SpotController.show)

routes.get('/profile', ProfileController.show)

routes.post('/spots/:spot_id/bookings', BookingController.store)

module.exports = routes