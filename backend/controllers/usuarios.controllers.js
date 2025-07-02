import db from "../database.js";

export const historial = (req, res) => {
  try {
    const {nombre, apellido} = req.query
    const stmt = db.prepare("SELECT * FROM ventas");
    const info = stmt.all();
    res.json(info);
  } catch (error) {
    console.log(error);
  }
};

export const add = (req, res) => {
  try {
    console.log(req.body);
    const { nombre, apellido } = req.body;
    const stmt = db.prepare(
      "INSERT INTO ventas (name, apellido) VALUES (?, ?)"
    );
    const result = stmt.run(nombre, apellido);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};
