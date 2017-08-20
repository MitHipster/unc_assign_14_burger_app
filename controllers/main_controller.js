/*jslint esversion: 6, browser: true*/
const express = require('express');
// Import the model to use database functions
const burger = require('../models/burger.js');

// Create the `router` for the app and export the `router` at the end of your file.
const router = express.Router();

// Router to get all burgers from the table
router.get('/', (req, res) => {
  burger.selectAll( (err, data) => {
    if (err) throw err;
    res.render('index', {burgers: data});
  });
});

// Export routes for server.js to use.
module.exports = router;
