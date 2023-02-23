import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Inicio from "./pages/Inicio";
import Nosotros from "./components/Nosotros";
import Contacto from "./pages/Contacto";
import Equipos from "./pages/Equipos";
import Login from "./pages/Login";
// import Cat1 from "./pages/Cat1"

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Inicio/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/equipos" element={<Equipos />} /> 
          <Route path="/equipos/:cat" element={<Equipos />} /> 
          {/* <Route path="/equipos/cat2" element={<Cat2 />} /> 
          <Route path="/equipos/cat3" element={<Cat3 />} /> 
          <Route path="/equipos/cat4" element={<Cat4 />} /> 
          <Route path="/equipos/cat5" element={<Cat5 />} /> 
          <Route path="/equipos/cat6" element={<Cat6 />} /> 
          <Route path="/equipos/cat7" element={<Cat7 />} /> 
          <Route path="/equipos/cat8" element={<Cat8 />} /> 
          <Route path="/equipos/cat9" element={<Cat9 />} /> */}
          <Route path="/contacto" element={<Contacto />} /> 
          <Route path="/login" element={<Login />} /> 

        </Routes>
      </Router>
    </div >
  );
}

export default App;
