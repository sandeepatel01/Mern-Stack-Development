// create(intantiate) server 
const express = require('express');
const app = express();


// CONNECTION TO THE DATABASE 
const db = require("./config/db");


// server listen in porst -> load config from  env file 
require("dotenv").config();
const PORT = process.env.PORT || 8080;


// start server 
app.listen(PORT, () => {
    console.log(`server started successfully at ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
})


// Connecting to database
db.connect();


// default route
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to AnajMarket app</h1>`);
});