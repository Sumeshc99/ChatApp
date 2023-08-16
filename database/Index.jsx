const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "groupChat",
});

app.listen(3001, () => {
  console.log("app connected to the backend");
});

app.post("/signIn", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  con.query(
    "INSERT INTO groupChat (id, name, email, password) VALUES (?,?,?)"[
      (name, email, password)
    ],
    (err, result) => {
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "enter correct info" });
      }
    }
  );
});
