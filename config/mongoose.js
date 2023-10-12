// importing required packages
const mongoose = require('mongoose');

// // connecting mongoose to its default server and MongoDB Database
mongoose.connect(`mongodb+srv://devsherawatmohit:monty952899@cluster0.9xepn68.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db')); // Error while connecting to database

db.once('open', function () {
  console.log("Successfully connected to the Database");// connection successful
});

module.exports = db;