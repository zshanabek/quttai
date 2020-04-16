const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiController = require('./controllers/apiController')

// To access our .env file values
require("dotenv").config();

// Set up port
const port = process.env.PORT || 5000;
const app = express();

// Set BodyParser middleware
app.use(bodyParser.json());
// Get the DB conection string
const dbURL = process.env.MONGODB_URL;
// Connect to the database

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(
    err => console.error(err)
  );

// For testing purpose only
app.get('/hello', function (req, res, next) {
  return res.json({ msg: 'Hello world' });
})

// Redirct any route which includes /api to apiRoute controller
app.use("/api", apiController);

// Start listening
app.listen(port, () => console.log("Server started at port " + port));
