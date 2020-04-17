const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
require('./models/shortUrls');


const db = process.env.MONGODB_URL;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(db, options, (err, db) => {
  if (err)
    console.log(`Error`, err);
  console.log(`Connected to MongoDB`);
});

const app = express();
app.use(bodyParser.json());

require('./controllers/apiController')(app);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port`, PORT);
});