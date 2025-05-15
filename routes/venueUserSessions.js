// venueUserSessionsRoute.js
const express = require('express');
const { VenueUserSession } = require('../models');
const router = express.Router();

// Create a new user session
router.post('/usersessions', async (req, res) => {
  try {
    const session = await VenueUserSession.create(req.body);
    res.status(201).json(session);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all user sessions
router.get('/usersessions', async (req, res) => {
  try {
    const userSessions = await VenueUserSession.findAll();
    res.status(200).json(userSessions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
