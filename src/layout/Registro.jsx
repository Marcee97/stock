import axios from "axios";
import "../style/registro.css";
import { useState } from "react";
export const Registro = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")


    const agregar = ()=> {
        axios.post('http://localhost:3000/add',{
            nombre,
            apellido
        })
    }

  return (
    <>
      <div className="registro">
        <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}/>
        <input type="text" placeholder="Apellido" onChange={(e) => setApellido(e.target.value)}/>
        <button onClick={agregar}>Agregar</button>
      </div>
    </>
  );
};
