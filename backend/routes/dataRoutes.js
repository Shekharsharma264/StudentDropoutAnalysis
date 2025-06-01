const express = require('express');
const router = express.Router();
const DropoutData = require('../models/DropoutData');  // Ensure the model path is correct

// GET request to fetch all dropouts
router.get('/dropouts', async (req, res) => {
  try {
    const dropouts = await DropoutData.find(); // Fetch all records from DropoutData
    res.json(dropouts); // Send as JSON response
  } catch (err) {
    res.status(500).json({ message: 'Error fetching data' });
  }
});

module.exports = router;
