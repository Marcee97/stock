import axios from "axios";
import "../style/historial.css";
import { useState } from "react";

export const Historial = () => {
  const [historial, setHistorial] = useState([]);

  const getHistorial = async () => {
    try {
      const response = await axios.get("http://localhost:3000/historial");
      setHistorial(response.data);
      console.log(historial);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="historial">
        <div className="cont-historial">
          <span class="material-symbols-outlined" onClick={getHistorial}>
            refresh
          </span>
          <div className="historial-cabecera">
            <strong>Nombre</strong>
            <strong>Apellido</strong>
            <strong>Articulo</strong>
            <strong>Seña</strong>
            <strong>Importe</strong>
          </div>
          {historial.map((item, index) => (
            <div key={index} className="historial-items">
              <p>{item.name}</p>
              <p>{item.apellido}</p>
              <p>{item.articulo}</p>
              <p>{item.reserva == null ? "Sin seña" : "no es null"}</p>
              <p>{item.importe}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
