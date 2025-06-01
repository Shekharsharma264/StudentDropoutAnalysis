const mongoose = require('mongoose');

const dropoutSchema = new mongoose.Schema({
  School_Type: String,
  Location: String,
  Infrastructure: String,
  Teaching_Staff: String,
  Gender: String,
  Caste: String,
  Age: Number,
  Standard: String,
  Socioeconomic_Status: String,
  Dropout_Status: String,
  Dropout_Reason: String
});

module.exports = mongoose.model('DropoutData', dropoutSchema);
