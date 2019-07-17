const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("./passport-strategies");
const { jwtSecret, saltRounds, db } = require("./conf");
const bcrypt = require("bcrypt");

router.post("/users", (req, res) => {
  let user = req.body;

  bcrypt.hash(user.password, parseInt(saltRounds), (err, hash) => {
    if (err)
      return res.status(418).json({ status: "Teapot", error: err, hash: hash });
    user.password = hash;
    console.log(user);

    db.query(
      `INSERT INTO users ( email, password, firstname, lastname) VALUES ('${
        user.email
      }', '${user.password}', '${user.firstname}', '${user.lastname}')`,
      (err, rows, fields) => {
        if (err) throw err;
        msg = "Registration ok!";
      }
    );
    res.status(200).send(user);
  });
});

router.post("/login", (req, res) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      // User not logged in (inexistant or tech error)
      console.log(err);
      return res.status(401).json({
        message: "Failed auth!",
        user,
        err,
        info
      });
    }
    req.login(user, { session: false }, loginErr => {
      if (loginErr) {
        // Failed (technically) to log the user in
        return res.status(401).json({
          message: "Couldn't log you in!",
          user,
          loginErr
        });
      }
      user.password = undefined;
      const token = jwt.sign(JSON.stringify(user), jwtSecret);
      return res.status(200).json({ user, token });
    });
  })(req, res);
});

router.get(
  "/testAuth",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).send(`Welcome ${req.user.firstname}, you're logged in !`);
  }
);

module.exports = router;
