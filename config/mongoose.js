// importing required packages
const mongoose = require('mongoose');

// // connecting mongoose to its default server and MongoDB Database
mongoose.connect(`mongodb://127.0.0.1:27017/habits_db`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db')); // Error while connecting to database

db.once('open', function () {
  console.log("Successfully connected to the Database");// connection successful
});

module.exports = db;
