const express = require('express');
const router = express.Router();
const { getAllDropoutData } = require('../controllers/dropoutController');

// Route to get all dropout data
router.get('/', getAllDropoutData);

module.exports = router;
