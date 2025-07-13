import Database from "better-sqlite3";

const db = new Database("./mi-stock.db");

// db.prepare('DROP TABLE bicicleteria').run()

db.prepare(`
  CREATE TABLE IF NOT EXISTS bicicleteria (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     name TEXT NOT NULL,
     apellido TEXT NOT NULL,
     articulo TEXT NOT NULL,
     reservas INTEGER ,
     importe INTEGER
  );
`).run()

db.prepare(`CREATE TABLE IF NOT EXISTS resumen (
  id INTEGER PRIMARY KEY,
  recaudacion INTEGER)`).run()

  db.prepare(`
  INSERT OR IGNORE INTO resumen (id, recaudacion) VALUES (1, 0)
`).run();

//db.prepare(`CREATE TABLE IF NOT EXISTS encargos (
// id INTEGER PRIMARY KEY,
// reservas)`)

export default db;

//backend\mi-stock.db