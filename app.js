// app.js
const express = require('express');
const app = express();

app.use(express.json()); // Built-in body parser

// Import routes
const venueRoutes = require('./routes/venue');
const userRoutes = require('./routes/venueUsers');
const sessionRoutes = require('./routes/venueUserSessions');

// Mount routes
app.use('/venue', venueRoutes);
app.use('/venueusers', userRoutes);  // Correctly mapped route
app.use('/venueusersessions', sessionRoutes);

module.exports = app;
