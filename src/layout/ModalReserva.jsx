import { useContext } from "react";
import "../style/modalReserva.css";
import TheContext from "../context/TheContext.jsx";

export const ModalReserva = () => {
  const { nombreReserva, finalizarReserva, setImporteReserva, toggleModalReserva } =
    useContext(TheContext);
  return (
    <section className={toggleModalReserva ? "modal-reserva-active" : "modal-reserva"}>
      <div className="cont-modal-reserva">
        <div className="cont-modal-cuadro">
          <strong>Completar Compra</strong>
          <p>
            {[
              nombreReserva.nombre,
              nombreReserva.apellido,
              nombreReserva.articulo,
              nombreReserva.seña,
            ]
              .map(
                (w) =>
                  String(w).charAt(0).toUpperCase() +
                  String(w).slice(1).toLowerCase()
              )
              .join(" - ")}
          </p>

          <input
            type="number"
            placeholder="Cantidad Abonada"
           onChange={(e) => setImporteReserva(Number(e.target.value))}
          />
          <button onClick={finalizarReserva}>Finalizar</button>
        </div>
      </div>
    </section>
  );
};
