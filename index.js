// importing required packages
const express = require('express');
const expressLayouts= require('express-ejs-layouts');
const db = require('./config/mongoose');

const port=3000; // setting up port

// initializing express.js
const app = express();

// using express inbuilt body-parser to parse over the request body
app.use(express.urlencoded({ extended: true }));

// setting root folder for assets
app.use(express.static('./assets'));
app.use(expressLayouts);

//Extract styles and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Use express router
app.use('/', require('./routes/index'));

// listening to the server
app.listen(port,function(error){
    if(error){
        console.log(`Error ${error}`);
    }

    console.log(`Server is up and running on the port : ${port}`);
});