const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiController = require('./controllers/apiController')

// To access our .env file values
require("dotenv").config();

const app = express();

// Set up port
const port = process.env.PORT || 5000;
const dbURL = process.env.MONGODB_URL;

// Set BodyParser middleware
app.use(bodyParser.json());


mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(
    err => console.error(err)
  );

app.get('/hello', function (req, res, next) {
  return res.json({ msg: 'Hello world' });
})

app.use("/api", apiController);

app.listen(port, () => console.log("Server started at port " + port));
