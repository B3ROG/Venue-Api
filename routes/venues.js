// routes/venues.js

const express = require('express');
const router = express.Router();
const venueController = require('../controllers/venueController');

// Create a venue
router.post('/', venueController.createVenue);

// Get all venues
router.get('/', venueController.getAllVenues);

// Get a specific venue
router.get('/:id', venueController.getVenueById);

// Update a venue
router.put('/:id', venueController.updateVenue);

// Delete a venue
router.delete('/:id', venueController.deleteVenue);

module.exports = router;
