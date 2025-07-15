import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
const TheContext = createContext();

export const AppProvider = ({ children }) => {
  const [onAdd, setOnAdd] = useState(true);
  const [recaudacion, setRecaudacion] = useState([]);
  const [reservas, setReservas] = useState([]);
  const [toggleInfo, setToggleInfo] = useState(false);
  const [historial, setHistorial] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [recaudacion, reservas] = await Promise.all([
          axios.get("http://localhost:3000/refresh"),
          axios.get("http://localhost:3000/upreservas"),
        ]);
        console.log(reservas.data.length);
        setRecaudacion(recaudacion.data);
        setReservas(reservas.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchReservas = async() => {
  //     const result = await axios.get('http://localhost:3000/upreservas')
  //     console.log(result.data)
  //   }

  //   fetchReservas()
  // }, [])

  useEffect(() => {

    const getHistorial = async () => {
      try {
        const response = await axios.get("http://localhost:3000/historial");
        setHistorial(response.data);
        console.log(historial, "este debetia ser todo el historial");
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getHistorial()
  }, [toggleInfo])

  return (
    <TheContext.Provider
      value={{
        onAdd,
        setOnAdd,
        recaudacion,
        reservas,
        toggleInfo,
        setToggleInfo,
        historial
      }}
    >
      {children}
    </TheContext.Provider>
  );
};

export const useAppContext = () => useContext(TheContext);
