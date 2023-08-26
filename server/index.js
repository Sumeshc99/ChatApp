const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

app.use(
  cors({
    origin: "", // Allow requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
  })
);

app.get("/", (req, res) => {
  res.json("hello this is backand");
});

app.get("/login", (req, res) => {
  const q = "SELECT * FROM login";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/signIn", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  con.query(
    "INSERT INTO login (id, name, email, password) VALUES (?,?,?)"[
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

app.listen(3001, () => {
  console.log("app connected to the backend!");
});

app.use(express.json());
