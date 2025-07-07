import axios from "axios";
import "../style/historial.css";
import { useState } from "react";
export const Historial = () => {

  const [data, setData] = useState([])


  const getInfo = async () => {
    try {
       const response = await axios.get("http://localhost:3000/historial")
       console.log(response.data[0].name)
       setData(response.data)
    

    } catch (error) {
      console.log(error)
    }
  };

  //HACER PETICION GET  Y MOSTRSR LA INFORMACION EN EL FRONT
  return (
    <>
      <section className="historial">
        <div className="cont-historial">
          <span class="material-symbols-outlined" onClick={getInfo}>
restart_alt
</span>
          <div>
           {data.length === 0 ? (
            <p>No hay datos</p>
           ) : (
            data.map((item, index) => (
              <div key={index}>
              <p>{item.name}</p>
              <p>{item.apellido}</p>
              </div>
            ))
           )}
          </div>
        </div>
      </section>
    </>
  );
};
