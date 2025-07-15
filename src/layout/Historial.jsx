import axios from "axios";
import "../style/historial.css";
import { useState } from "react";
import { useAppContext } from "../context/TheContext.jsx";

export const Historial = () => {
  const { reservas, toggleInfo, setToggleInfo, historial } = useAppContext();

  console.log(historial);


  return (
    <>
      <section className="historial">
        <div className="cont-historial">
          <div className="cont-reservas">
            <div className="cont-reservas__botones">
              <h4
                className="titulo-reservas"
                onClick={() => setToggleInfo((prev) => !prev)}
              >
                Reservas
              </h4>
              <h4
                className="titulo-reservas"
                onClick={() => setToggleInfo((prev) => !prev)}
              >
                Ventas
              </h4>
            </div>
           
          </div>
          <div className="section-reservas-ventas">
            {toggleInfo == false ? (
              <div>
                <header className="historial-cabecera">
                  <strong>Nombre</strong>
                  <strong>Apellido</strong>
                  <strong>Articulo</strong>
                  <strong>Seña</strong>
                  <strong>Importe</strong>
                </header>
             { historial.map((item, index) => (
               <div key={index} className="historial-items">
                  <p  className="items-reserva-ventas">{item.name}</p>
                  <p  className="items-reserva-ventas">{item.apellido}</p>
                  <p  className="items-reserva-ventas">{item.articulo}</p>
                  <p  className="items-reserva-ventas">{item.reserva == null ? "Sin seña" : "no es null"}</p>
                  <p  className="items-reserva-venta">{item.importe}</p>
                </div>
              ))}
              </div>
            ) : (
              <div>
                <header className="cabecera-reservas">
                  <strong>Nombre</strong>
                  <strong>Apellido</strong>
                  <strong>Articulo</strong>
                  <strong>Seña</strong>
                </header>
                {reservas.map((item, index) => (
                    <div className="reservas-items" key={index}>
                      <p className="items-reserva-ventas">{item.name}</p>
                      <p className="items-reserva-ventas">{item.apellido}</p>
                      <p className="items-reserva-ventas">{item.articulo}</p>
                      <p className="items-reserva-ventas">{item.seña}</p>
                    </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
