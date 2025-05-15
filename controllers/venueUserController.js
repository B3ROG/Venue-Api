const { VenueUser } = require('../models');
const bcrypt = require('bcrypt');

// GET all venue users
exports.getAllVenueUsers = async (req, res) => {
  try {
    const venueUsers = await VenueUser.findAll();
    res.json(venueUsers);
  } catch (error) {
    console.error("Error fetching venue users:", error);
    res.status(500).json({ error: "Failed to fetch venue users" });
  }
};

// POST a new venue user
exports.createVenueUser = async (req, res) => {
  try {
    const { venue_id, role_id, email, password } = req.body; // Expect plain password

    // Validation to ensure password is provided
    if (!password || !venue_id || !role_id) {
      return res.status(400).json({ error: "password, venue_id, and role_id are required" });
    }

    // Hash the password
    const saltRounds = 10;
    const password_hash = await bcrypt.hash(password, saltRounds);

    // Create the new venue user with hashed password
    const newVenueUser = await VenueUser.create({
      venue_id,
      role_id,
      email,
      password_hash, // Save the hashed password
    });

    // Send the response
    res.status(201).json({
      id: newVenueUser.id,
      venue_id: newVenueUser.venue_id,
      role_id: newVenueUser.role_id,
      email: newVenueUser.email,
      // Don't send password_hash back in the response
    });
  } catch (error) {
    console.error("Error creating venue user:", error);
    res.status(500).json({ error: "Failed to create venue user" });
  }
};
