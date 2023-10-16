// Main entry point for the backend
const express = require("express");
const cors = require("cors");
// const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const port = process.env.PORT || 5000;

const app = express();
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const savedData = [];
app.get("/api", (req, res) => {
  res.json(savedData);
});

let idCount = 0;
app.post("/api", (req, res) => {
  console.log("Received POST request with data--", req.body);
  const { fullName, message, status } = req.body;
  idCount++;
  //save to db
  //send request back to client
  // res.json({
  //     fullName,
  //     message,
  // });

  const newData = {
    id: idCount,
    fullName,
    message,
    status,
  };

  savedData.push(newData);
  res.json(savedData);
});
console.log(savedData);

// app.put("/api/update", (req, res) => {
//   const { id, status } = req.body;

//   res.json({ message: "Данные успешно обновлены" });
// });

