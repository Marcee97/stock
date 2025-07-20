import { useState, useEffect } from "react";
import axios from "axios";
import TheContext from "./TheContext";

const AppProvider = ({ children }) => {
  const [onAdd, setOnAdd] = useState(true);
  const [recaudacion, setRecaudacion] = useState([]);
  const [reservas, setReservas] = useState([]);
  const [toggleInfo, setToggleInfo] = useState(false);
  const [historial, setHistorial] = useState([]);
  const [nombreReserva, setNombreReserva] = useState([]);
  const [importeReserva, setImporteReserva] = useState(0);
  const [toggleModalReserva, setToggleModalReserva] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [recaudacion, reservas] = await Promise.all([
          axios.get("http://localhost:3000/refresh"),
          axios.get("http://localhost:3000/upreservas"),
        ]);
        setRecaudacion(recaudacion.data);
        setReservas(reservas.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const completarReserva = async (item) => {
    setToggleModalReserva(prev => !prev)
    console.log(item.name, "el item que viene");
    setNombreReserva({
      nombre: item.name,
      apellido: item.apellido,
      articulo: item.articulo,
      seña: item.seña,
    });
    console.log(importeReserva, "lo que pago desp de la reserva");
  };

  const finalizarReserva = async () => {
    try {
      await axios.post("http://localhost:3000/completar-reserva", {
        nombre: nombreReserva.nombre,
        apellido: nombreReserva.apellido,
        articulo: nombreReserva.articulo,
        seña: nombreReserva.seña,
        importe: importeReserva,
      });
      console.log(nombreReserva, "finalizar Reserva");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getHistorial = async () => {
      try {
        const response = await axios.get("http://localhost:3000/historial");
        setHistorial(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getHistorial();
  }, [toggleInfo]);

  return (
    <TheContext.Provider
      value={{
        onAdd,
        setOnAdd,
        recaudacion,
        reservas,
        toggleInfo,
        setToggleInfo,
        historial,
        completarReserva,
        setNombreReserva,
        nombreReserva,
        finalizarReserva,
        setImporteReserva,
        toggleModalReserva,
        setToggleModalReserva,
      }}
    >
      {children}
    </TheContext.Provider>
  );
};

export default AppProvider;
