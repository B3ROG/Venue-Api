// failedLoginsRoute.js
const express = require('express');
const { FailedLogin } = require('../models');
const router = express.Router();

// Create a new failed login entry
router.post('/failedlogins', async (req, res) => {
  try {
    const failedLogin = await FailedLogin.create(req.body);
    res.status(201).json(failedLogin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all failed logins
router.get('/failedlogins', async (req, res) => {
  try {
    const failedLogins = await FailedLogin.findAll();
    res.status(200).json(failedLogins);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
