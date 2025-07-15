import axios from "axios";
import "../style/base.css";
import { Add } from "./Add";
import { useAppContext } from "../context/TheContext.jsx";

export const Base = () => {
 
 const { reservas, recaudacion} = useAppContext()

  return (
    <>
      <section className="base">
        <div className="cont-titulos">
          <h1 className="base-titulo">Gestor de clientes</h1>
          <p className="base-subtitulo">Administra clientes y transacciones</p>
        </div>
        <div className="cont-flotantes">
          {recaudacion.map((item, index) => (
            <article className="flotante" key={index}>
              <strong>Recaudacion</strong>
              <p>
                {recaudacion[0] ? recaudacion[0].recaudacion : "Cargando..."}
              </p>
            </article>
          ))}
        <div className="cont-flotantes">
          <article className="flotante">
            <strong>Reservas</strong>
            <p>{reservas.length > 0 ? reservas.length : "Cargando..."}</p>
          </article>
        </div>
        </div>

        <Add />
      </section>
    </>
  );
};
