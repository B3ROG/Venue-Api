// captchaChallengesRoute.js
const express = require('express');
const { CaptchaChallenge } = require('../models');
const router = express.Router();

// Create a new captcha challenge
router.post('/captchachallenges', async (req, res) => {
  try {
    const captchaChallenge = await CaptchaChallenge.create(req.body);
    res.status(201).json(captchaChallenge);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all captcha challenges
router.get('/captchachallenges', async (req, res) => {
  try {
    const captchaChallenges = await CaptchaChallenge.findAll();
    res.status(200).json(captchaChallenges);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
