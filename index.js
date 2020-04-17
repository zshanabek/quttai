const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
require('./models/shortUrls');

const db = process.env.MONGODB_URL;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(db, options)

mongoose.connection.on('connected', function () {
  console.log("Database is connected");
});

mongoose.connection.on('error', function (err) {
  console.log("Error with database connection " + err);
});

const app = express();
app.use(bodyParser.json());

require('./controllers/apiController')(app);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port`, process.env.PORT);
});