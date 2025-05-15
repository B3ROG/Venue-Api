// passwordResetsRoute.js
const express = require('express');
const { PasswordReset } = require('../models');
const router = express.Router();

// Create a new password reset
router.post('/passwordresets', async (req, res) => {
  try {
    const passwordReset = await PasswordReset.create(req.body);
    res.status(201).json(passwordReset);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all password resets
router.get('/passwordresets', async (req, res) => {
  try {
    const passwordResets = await PasswordReset.findAll();
    res.status(200).json(passwordResets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
