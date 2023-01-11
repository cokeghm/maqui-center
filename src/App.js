import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from "./pages/Inicio";
import Nosotros from "./components/Nosotros";
import Contacto from "./pages/Contacto";
import Productos from "./pages/Productos";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" exact element={<Inicio/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/productos" element={<Productos />} /> 
          <Route path="/contacto" element={<Contacto />} /> 
        </Routes>
      </Router>
    </div >
  );
}

export default App;
