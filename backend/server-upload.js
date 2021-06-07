/* eslint-disable no-unused-vars */
const express = require('express');
const multer = require('multer');
const path = require('path');
const uuid = require('uuid').v4;
const app = express();
const compareFiles = require('./compare-files');
const fs = require('fs');

// const db = require('./db');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    // or
    // uuid, or fieldname
    cb(null, originalname);
  },
});
const upload = multer({ storage }); // or simply { dest: 'uploads/' }
app.use(express.static('client'));

app.post('/upload', upload.any('files'), (req, res) => {
  return res.json({ status: 'OK', uploaded: req.files.length });
});

app.get('/compare', function (req, res) {
  const similarity = compareFiles();
  let text = similarity.bestMatch.target;
  // db.addMatch(text);

  res.send(similarity);
});

/*
app.get('/matches', function (req, res) {
  let matches = db.getMatches();
  res.json(matches);
});
// compareFiles();
*/
app.listen(8080);
