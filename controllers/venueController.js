// controllers/venueController.js

const { Venue } = require('../models');

// Create a new venue
exports.createVenue = async (req, res) => {
  try {
    const { org_id, venue_name, email, phone_number, alternate_phonenumber, address, state, country, pincode, created_by } = req.body;
    
    const venue = await Venue.create({
      org_id,
      venue_name,
      email,
      phone_number,
      alternate_phonenumber,
      address,
      state,
      country,
      pincode,
      created_by
    });

    return res.status(201).json(venue);
  } catch (error) {
    console.error("Error creating venue:", error);
    return res.status(500).json({ error: "Failed to create venue" });
  }
};

// Get all venues
exports.getAllVenues = async (req, res) => {
  try {
    const venues = await Venue.findAll();
    return res.status(200).json(venues);
  } catch (error) {
    console.error("Error retrieving venues:", error);
    return res.status(500).json({ error: "Failed to retrieve venues" });
  }
};

// Get a single venue
exports.getVenueById = async (req, res) => {
  try {
    const { id } = req.params;
    const venue = await Venue.findByPk(id);

    if (!venue) {
      return res.status(404).json({ error: "Venue not found" });
    }

    return res.status(200).json(venue);
  } catch (error) {
    console.error("Error retrieving venue:", error);
    return res.status(500).json({ error: "Failed to retrieve venue" });
  }
};

// Update a venue
exports.updateVenue = async (req, res) => {
  try {
    const { id } = req.params;
    const { venue_name, email, phone_number, alternate_phonenumber, address, state, country, pincode, updated_by } = req.body;

    const venue = await Venue.findByPk(id);

    if (!venue) {
      return res.status(404).json({ error: "Venue not found" });
    }

    await venue.update({
      venue_name,
      email,
      phone_number,
      alternate_phonenumber,
      address,
      state,
      country,
      pincode,
      updated_by
    });

    return res.status(200).json(venue);
  } catch (error) {
    console.error("Error updating venue:", error);
    return res.status(500).json({ error: "Failed to update venue" });
  }
};

// Delete a venue
exports.deleteVenue = async (req, res) => {
  try {
    const { id } = req.params;

    const venue = await Venue.findByPk(id);

    if (!venue) {
      return res.status(404).json({ error: "Venue not found" });
    }

    await venue.destroy();
    return res.status(200).json({ message: "Venue deleted successfully" });
  } catch (error) {
    console.error("Error deleting venue:", error);
    return res.status(500).json({ error: "Failed to delete venue" });
  }
};
