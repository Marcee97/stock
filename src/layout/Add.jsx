import { useEffect, useState } from "react";
import "../style/add.css";
import axios from "axios";
import { useAppContext } from "../../backend/context/TheContext.jsx";
export const Add = () => {

  const {onAdd} = useAppContext()
console.log(onAdd)

  const [modo, setModo] = useState("venta");
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [articulo, setArticulo] = useState("")
  const [importe, setImporte] = useState(0)
  const [seña, setSeña] = useState(0)

  const compraReserva = async() => {
    if (modo === "venta") {
      const result = await axios.post("http://localhost:3000/venta", {
        nombre,
        apellido,
        articulo,
        importe
      })
      console.log("Se registro una venta")

    } else {
       const result = await axios.post("http://localhost:3000/reserva", {
        nombre,
        apellido,
        articulo,
        seña
      })
      console.log("Se hizo una reserva");
    }
  }

  return (
    <>
      <section className={`add ${onAdd === true ? "transform-active" : ""}`}>
        <div className="cont-add">
          <div className="add-nav">
            <p className={`nav-opcion-venta ${modo === "venta" ? "active" : ""}`} onClick={()=> setModo("venta")}>Venta</p>
            <p className={`nav-opcion-venta ${modo === "reserva" ? "active" : ""}`} onClick={() => setModo("reserva") }>Reservar</p>
          </div>
          <div className="cont-form">
            <h4 className="titulo-add">{modo === "venta" ? "Crear venta" : "Hacer reserva"}</h4>
            <div className="cont-form-cliente">
              <input
                type="text"
                placeholder="Nombre"
                className="input-add-cliente"
                onChange={(e) => setNombre(e.target.value)}
              />
              <input
                type="text"
                placeholder="Apellido"
                className="input-add-cliente"
                onChange={(e) => setApellido(e.target.value)}
              />
              <input
                type="text"
                placeholder="Articulo"
                className="input-add-cliente"
                onChange={(e) => setArticulo(e.target.value)}
              />
              <input type="number"
              placeholder={`${modo === "venta" ? "Importe" : "Seña (Opcional)"}`}
              className="input-add-cliente"
              onChange={(e) => setImporte(e.target.value)} />
              <button className="btn-add" onClick={compraReserva}>{modo === "venta" ? "Confirmar" : "Reservar"}</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
