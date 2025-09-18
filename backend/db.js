const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const { serialize } = require('v8');

const db = new sqlite3.Database(path.join(__dirname, 'Plagiarism.db'), (err) => {
    if (err) {
        console.error('Error opening the database');
    } else {
        console.log('Connected to SQLite database');
    }
});

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS uploads (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            filename TEXT NOT NULL,
            content TEXT NOT NULL,
            uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`,
    );

    db.run(`
        CREATE TABLE IF NOT EXISTS comparisons (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            original_file TEXT NOT NULL,
            compared_file TEXT NOT NULL,
            similarity REAL NOT NULL,
            made_at DATETIME DEFAULT CURRENT_TIMESTAMP
            
        )`);
});

module.exports = db;
