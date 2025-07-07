import "../style/add.css";
export const Add = () => {
  return (
    <>
      <section className="add">
        <div className="cont-add">
          <div className="add-nav">
            <p>Agregar</p>
            <p>Reservar</p>
          </div>
          <div>
            <h4>Agregar Cliente</h4>
            <div className="">
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
