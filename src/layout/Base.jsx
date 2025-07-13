import axios from "axios";
import "../style/base.css";
import { Add } from "./Add";
import { useEffect, useState } from "react";
export const Base = () => {
  const [refresh, setRefresh] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3000/refresh");
      setRefresh(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="base">
        <div className="cont-titulos">
          <h1 className="base-titulo">Gestor de clientes</h1>
          <p className="base-subtitulo">Administra clientes y transacciones</p>
        </div>
        <div className="cont-flotantes">
         {refresh.map((item, index) => (
         <article className="flotante" key={index}>
            <strong>Recaudacion</strong>
            <p>{refresh[0] ? refresh[0].recaudacion : "Cargando..."}</p>
          </article>
         ))}
         
          
        </div>
        <Add />
      </section>
    </>
  );
};
