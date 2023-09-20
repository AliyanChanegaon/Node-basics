const { Router } = require("express");
const express = require("express");
const data = require("../db.json");
const fs = require("fs");
// importing data from db.json
const product = Router();

product.use(express.json());

// Middleware to check if req.body.name exists
function checkNameExists(req, res, next) {
  if (req.body.name) {
    next(); // Name exists, continue with the request
  } else {
    res.status(500).send("Please send a 'name' in the request body.");
  }
}

//  local middleware

product.get("/", (req, res) => {
  res.json(data);
});

product.put("/", checkNameExists, (req, res) => {
  console.log(req.body.id);
  const updatedArr = data.data.map((el) => {
    if (req.body.id == el.id) {
      el.name = req.body.name;
    }
    return el;
  });

  fs.writeFileSync("./db.json", JSON.stringify({ data: updatedArr }), {
    encoding: "utf-8",
  });
  // In the code provided, the fs module is used to write the updated data to the db.json file, effectively saving the changes made during the PUT request.

  res.end("Welcome to put");
});
product.delete("/", (req, res) => {
  res.end("Welcome to delete");
});
product.post("/", checkNameExists, (req, res) => {
  console.log(req.body);
  res.end("Welcome to post");
});

module.exports = product;
