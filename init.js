const Dataabse = require("better-sqlite3");

const db = new Dataabse("Lecturers.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS lecturers(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    surname TEXT,
    phone TEXT,
    email TEXT,
    faculty TEXT,
    institution TEXT,
    dateofbirth TEXT,
    cover TEXT
    )
    `)