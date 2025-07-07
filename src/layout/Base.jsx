import "../style/base.css";
import { Add } from "./Add";
export const Base = () => {
  return (
    <>
      <section className="base">
        <div className="cont-titulos">

        <h1 className="base-titulo">Gestor de clientes</h1>
        <p className="base-subtitulo">Administra clientes y transacciones</p>
        </div>
        <div className="cont-flotantes">
          <article className="flotante clientes">
            <strong>Total Clientes</strong>
            <p>22</p>
          </article>
          <article className="flotante">
            <strong>Reservas Pendientes</strong>
            <p>15</p>
          </article>
          <article className="flotante">
            <strong>Recaudacion</strong>
            <p>1200 $</p>
          </article>
        </div>
    <Add/>
      </section>
    </>
  );
};
