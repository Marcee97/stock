import Database from "better-sqlite3";


const db = new Database("./mi-stock.db");

db.prepare(`
  CREATE TABLE IF NOT EXISTS ventas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    apellido TEXT NOT NULL
  );
`).run()

export default db;

//backend\mi-stock.db
