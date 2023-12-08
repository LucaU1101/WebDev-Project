const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Replace 'your_database_url' with your actual MongoDB connection string
const dbUrl = 'mongodb://localhost:27017/your_database';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
