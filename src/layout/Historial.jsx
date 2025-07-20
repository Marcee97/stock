import "../style/historial.css";
import React, { useContext } from "react";
import { ModalReserva } from "./ModalReserva.jsx";
import TheContext from "../context/TheContext.jsx";

export const Historial = () => {
  const { reservas, toggleInfo, setToggleInfo, historial,  completarReserva, setToggleModalReserva} = useContext(TheContext);

  return (
   <>
  <section className="historial">
    <div className="cont-historial">
      <div className="cont-reservas">
        <div className="cont-reservas__botones">
          <h4
            className={toggleInfo ? "titulo-reservas  titulo-active" : "titulo-reservas "}
            onClick={() => setToggleInfo(true)}
          >
            Reservas
          </h4>
          <h4
            className={toggleInfo ? "titulo-reservas" : "titulo-reservas titulo-active"}
            onClick={() => setToggleInfo(false)}
          >
            Ventas
          </h4>
        </div>
      </div>

      <section className="cuadro-historial-reservas">
        <div className={toggleInfo ? "grid-header" : "grid-header__historial"}>
          <strong>Nombre</strong>
          <strong>Apellido</strong>
          <strong>Articulo</strong>
          <strong>Seña</strong>
          {!toggleInfo && <strong>Precio</strong>}
        </div>
        {(toggleInfo ? reservas : historial).map((item, index) => (
          <div
            className={
              toggleInfo ? "cont-reservass" : "cont-reservass__historial"
            }
            key={index}
          >
            <div className="item-reservas__button">
              <div className="reservas-botonera">
                <span className="material-symbols-outlined reservas-botones" onClick={()=>setToggleModalReserva(prev => !prev)}>
                  delete
                </span>
                <span className={toggleInfo ? "material-symbols-outlined reservas-botones" : "material-symbols-outlined reservas-botones historial-active"} onClick={() => completarReserva(item)}>
                  add
                </span>
              </div>
              <span className="nombre item-reservas">{item.name}</span>
            </div>
            <p className="item-reservas">{item.apellido}</p>
            <p className="item-reservas">{item.articulo}</p>
            <p className="item-reservas">{item.seña == null ? "Sin seña" : item.seña}</p>
            {!toggleInfo && (
              <p className="item-reservas">{item.importe}</p>
            )}
          </div>
        ))}
        <ModalReserva/>
      </section>
    </div>
  </section>
</>

  );
};
