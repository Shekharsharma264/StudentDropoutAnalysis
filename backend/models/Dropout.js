const mongoose = require("mongoose");

const dropoutSchema = new mongoose.Schema({
  Standard: Number,
  Gender: String,
  School_Type: String,
  Location: String,
  Socioeconomic_Status: String,
  Dropout_Status: String,
});

module.exports = mongoose.model("Dropout", dropoutSchema);
