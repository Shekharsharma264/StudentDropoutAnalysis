const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');
const DropoutData = require('./models/DropoutData'); // Adjust the path if needed

// MongoDB URI (from your .env file or hardcoded for testing)
const mongoURI = 'mongodb://127.0.0.1:27017/student-dropout';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    importCSVData();
  })
  .catch(err => console.error('MongoDB connection error:', err));

// Read CSV file and import data
function importCSVData() {
  const results = [];
  fs.createReadStream('backend/data/SIH-Dataset.csv') // Adjust the path if needed
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log('CSV file successfully processed');
      insertData(results);
    });
}

// Insert data into MongoDB
function insertData(data) {
  DropoutData.insertMany(data)
    .then(() => {
      console.log('Data successfully inserted into MongoDB');
      process.exit();
    })
    .catch((err) => {
      console.error('Error inserting data:', err);
      process.exit(1);
    });
}
