import db from "../models/database.js";

export const historial = (req, res) => {
  try {
    const stmt = db.prepare("SELECT * FROM bicicleteria");
    const info = stmt.all();
    res.json(info);
  } catch (error) {
    console.error(error);
  }
};

export const venta = (req, res) => {
  try {
    const { nombre, apellido, articulo, importe } = req.body;
    const stmt = db.prepare(
      "INSERT INTO bicicleteria (name, apellido, articulo,importe) VALUES (?, ?, ?, ?)"
    );
    stmt.run(nombre, apellido, articulo, importe);

    const stmtUpdate = db.prepare(
      `UPDATE resumen SET recaudacion = recaudacion + ? WHERE id = 1`
    );
    stmtUpdate.run(importe);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

export const reserva = (req, res) => {
  try {
    console.log(req.body);
    const { nombre, apellido, articulo, importe } = req.body;
    console.log(nombre, apellido, articulo, importe);
    const stmt = db.prepare(
      "INSERT INTO encargos (name, apellido, articulo, seña) VALUES (?, ?, ?, ?)"
    );
    const result = stmt.run(nombre, apellido, articulo, importe);
  } catch (error) {
    console.log(error);
  }
};

export const getReservas = (req, res) => {
  try {
    const result = db.prepare("SELECT * FROM encargos");
    const info = result.all();

    res.json(info);
  } catch (error) {
    console.log(error);
  }
};

export const refresh = (req, res) => {
  try {
    const stmt = db.prepare("SELECT * FROM resumen");
    const info = stmt.all();
    console.log(info, "ñ");
    res.json(info);
  } catch (error) {
    console.log(error);
  }
};

export const completarReserva = (req, res) => {
  console.log(req.body, "holasi");
  try {
    const { nombre, apellido, articulo, seña, importe } = req.body;

    const stmt = db.prepare(
      "SELECT * FROM encargos WHERE name = ? AND apellido = ?"
    );
    const info = stmt.all(nombre.nombre, apellido.apellido);
    console.log(info, "info");

    const insertStmt = db.prepare(
      `INSERT INTO bicicleteria (name, apellido, articulo, reservas, importe) VALUES (?, ?, ?, ?, ?)`
    );
    const insertInfo = insertStmt.run(
      nombre,
      apellido,
      articulo,
      seña,
      importe
    );

    const deleteStmt = db.prepare('DELETE FROM encargos WHERE name = ? AND apellido = ?')
    const deleteInfo = deleteStmt.run(nombre, apellido)

    console.log(info);
    res.status(200).json(deleteInfo);
  } catch (error) {
    console.log(error);
  }
};

