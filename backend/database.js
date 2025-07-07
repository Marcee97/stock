import Database from "better-sqlite3";

const db = new Database("./mi-stock.db");

// db.prepare('DROP TABLE VENTAS').run()

db.prepare(`
  CREATE TABLE IF NOT EXISTS bicicleteria (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     name TEXT NOT NULL,
     apellido TEXT NOT NULL,
     articulo TEXT NOT NULL,
     reservas INTEGER NOT NULL,
     recaudacion REAL NOT NULL
  );
`).run()

export default db;

//backend\mi-stock.db
