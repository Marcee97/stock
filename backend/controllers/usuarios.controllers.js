import db from "../database.js";

export const historial = (req, res) => {
  try {
    const stmt = db.prepare("SELECT * FROM bicicleteria");
    const info = stmt.all();
    res.json(info);
  } catch (error) {
    console.log(error);
  }
};



export const venta = (req, res) => {
  try {
    const { nombre, apellido, articulo, importe } = req.body;
    const stmt = db.prepare(
      "INSERT INTO bicicleteria (name, apellido, articulo,importe) VALUES (?, ?, ?, ?)"
    );
    stmt.run(nombre, apellido, articulo ,importe)
    
    const stmtUpdate = db.prepare(`UPDATE resumen SET recaudacion = recaudacion + ? WHERE id = 1`)
    stmtUpdate.run(importe)
  } catch (error) {
    console.log(error);
  }
};

export const reserva = (req, res) => {
  try {
    console.log(req.body);
    const { nombre, apellido, articulo, importe } = req.body;
    const stmt = db.prepare(
      "INSERT INTO bicicleteria (name, apellido, articulo, recaudacion) VALUES (?, ?, ?, ?)"
    );
    const result = stmt.run(nombre, apellido, articulo, importe);
  } catch (error) {
    console.log(error);
  }
};
