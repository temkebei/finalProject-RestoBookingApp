const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const expressValidator = require("express-validator");
const passport = require("passport");

mongoose.connect(
  "mongodb://localhost/restoBookingApp",{
    useNewUrlParser: true
  }
);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());

app.use(passport.initialize());

require("./routes/passport")(passport);

const customerroutes = require("./routes/customer");


app.use("/customer", customerroutes);

const port = process.env.port || 3001;
app.listen(port, err => {
  if (err) {
    throw err;
  }
  console.log(`Server Running at port number ${port}`);
});