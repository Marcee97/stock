import { useAppContext } from "../context/TheContext.jsx";
import "../style/navbar.css";
export const Navbar = () => {

  const {setOnAdd} = useAppContext()
  return (
    <>
      <nav className="nav">
        <input type="text" placeholder="Buscar Clientes" className="buscador" />
        <span class="material-symbols-outlined iconsearch">search</span>
        <button className="btn-add" title="Agregar Cliente" onClick={() => setOnAdd(prev => !prev)}>
          Add+
        </button>
      </nav>
    </>
  );
};
