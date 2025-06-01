const DropoutData = require('../models/DropoutData');

// Controller to get all dropout data
const getAllDropoutData = async (req, res) => {
  try {
    const data = await DropoutData.find();
    res.json(data);  // Send data as JSON response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllDropoutData };
