import "../style/navbar.css"
export const Navbar = () => {
  return (
    <>
        <nav className="nav">
            <input type="text" placeholder="Buscar Clientes" className="buscador" />
            <span class="material-symbols-outlined iconsearch">
search
</span>
<button className="btn-add" title="Agregar Cliente">Add+</button>
        </nav>
    </>
  )
}
