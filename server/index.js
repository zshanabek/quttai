const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
require('./models/shortUrls');

const url = process.env.MONGODB_URL;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(url, options)

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Database is connected");
});

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-type,Accept,x-access-token,X-Key"
  );
  if (req.method == "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});


app.use(bodyParser.json());

require('./controllers/apiController')(app);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port`, process.env.PORT);
});