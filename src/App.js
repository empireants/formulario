import "./App.css";
import InterandoConMapa from "./components/InterandoConMapa";
import Register from "./components/Register";
import RegisterEstado from "./components/Registrar-Estado";

function App() {
  return (
    <div className="App">
      <h1>App Para Formulario con Ganchos</h1>
      <h2>Formulario Dynamico con FormData</h2>
      <Register />
      <hr />
      <h2>Formulario usando UseState</h2>
      <RegisterEstado />
      <hr />
      <h2>Iterando con Mapa</h2>
      <InterandoConMapa
        arreglo={["cebolla", "tomate", "pepino", "piña", "aguacate"]}
      />
    </div>
  );
}

export default App;
