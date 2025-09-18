const db = require('./db')
const express = require('express');
const multer = require('multer');
// const path = require('path');
const uuid = require('uuid').v4;
const app = express();
// const compareFiles = require('./compare-files');
const fs = require('fs');
// const { json } = require('stream/consumers');

const upload = multer({ dest: 'temp' });

app.use(express.static('client'));

app.post('/upload', upload.any('files'), (req, res) => {
  req.files.forEach((file) => {
    const content = fs.readFileSync(file.path, 'utf-8');

    db.run(
      'INSERT INTO uploads (filename, content) VALUES (?, ?)',
      [file.originalname, content],
    );
    // deletes the temporary file as no longer need when files data is inserted into the db
    fs.unlinkSync(file.path);
  });

  return res.json({ status: 'OK', uplaoded: req.files.length });
});


app.get("/compare", (req, res) => {
  db.all(
    `SELECT * FROM uploads ORDER BY uploaded_at DESC LIMIT 2`,
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      if (rows.length < 2) {
        return res.status(400).json({ error: "Need at least 2 files to be used in the analysis" });
      }

      const original = rows[0].content
      const targets = rows.slice(1).map((r) => r.content);

      const stringSimilarity = require('string-similarity');
      const result = stringSimilarity.findBestMatch(original, targets)

      db.run(
        `INSERT INTO comparisons (original_file, compared_file, similarity) VALUES (?, ?, ?)`,
        [rows[0].filename, rows[1].filename, result.bestMatch.rating],
      );
      res.json({ ...result, files: rows.map((r) => r.filename), });
    }
  );
});

app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
