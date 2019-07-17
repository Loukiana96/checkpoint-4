const express = require("express");
const cors = require("cors");
const app = express();
const { portNumber, db } = require("./conf");
const passport = require("passport");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use("/auth", require("./auth"));

app.listen(portNumber, () => {
  console.log(`API root available at: http://localhost:${portNumber}/`);
});
