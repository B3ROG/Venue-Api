const express = require('express');
const router = express.Router();
const venueUsersController = require('../controllers/venueUserController');

// GET all venue users
router.get('/', venueUsersController.getAllVenueUsers);

// POST a new venue user
router.post('/', venueUsersController.createVenueUser);

module.exports = router;
