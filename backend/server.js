/* eslint-disable no-unused-vars */
const express = require("express");
const multer = require("multer");
const path = require("path");
const uuid = require("uuid").v4;
const app = express();
const compareFiles = require("./compare-files");
const fs = require("fs");

// const db = require('./db');
const upload = multer({ dest: "uploads" });

app.use(express.static("client"));

app.post("/upload", upload.any("files"), (req, res) => {
  return res.json({ status: "OK", uploaded: req.files.length });
});

app.get("/compare", async (req, res) => {
  try {
    const similarity = await compareFiles();
    const text = similarity.bestMatch.target;
    // db.addMatch(text);

    res.json(similarity); // use json so frontend can consume easily
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Comparison failed", details: err.message });
  }
});

/*
app.get('/matches', function (req, res) {
  let matches = db.getMatches();
  res.json(matches);
});
*/

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
