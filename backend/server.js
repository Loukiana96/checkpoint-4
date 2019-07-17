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
// app.use("/auth", require("./auth"));

app.get("/animal/", (req, res) => {
  db.query(
    `SELECT animals.id, name, age, species, description, picture, SUM(gift) FROM gith INNER JOIN animals ON id.animal=id_animal`,
    (err, rows) => {
      if (err) {
        console.log(err);
        return res.status(500).send("error when getting animals route");
      }
      if (!rows) {
        return res.status(404).send("No animals found");
      }
      res.status(200).send(rows);
    }
  );
});

app.get("/training/", (req, res) => {
  db.query(
    `SELECT id, title, DATE_FORMAT(session_date, "%d/%m/%Y") as session_format_date, description, picture FROM trainings`,
    (err, rows) => {
      if (err) {
        console.log(err);
        return res.status(500).send("error when getting training route");
      }
      if (!rows) {
        return res.status(404).send("No training found");
      }
      res.status(200).send(rows);
    }
  );
});

app.listen(portNumber, () => {
  console.log(`API root available at: http://localhost:${portNumber}/`);
});
