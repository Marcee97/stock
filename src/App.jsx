import { Navbar } from "./layout/Navbar"
import "./app.css";
import { Base } from "./layout/Base.jsx";
import { Add } from "./layout/Add.jsx";
export const App = () => {
  return (
    <section className="app">
    <Navbar/>
    <Base/>
    </section>
  )
}
