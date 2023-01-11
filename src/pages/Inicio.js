import "../styles/Inicio.css";

import NavBar from "../components/NavBar";
import LogoBar from "../components/LogoBar";
import SearchBar from "../components/SearchBar";
import Banner from '../components/Banner';
import Nosotros from '../components/Nosotros'
import Categorias from '../components/Categorias';
import MasVendidos from '../components/MasVendidos';
import Footer from '../components/Footer';
import {Container} from 'react-bootstrap';

function Inicio() {
  return (
       <Container fluid>
        <NavBar/>
        <LogoBar/>
        <SearchBar />
        <Banner />
        <Categorias />
        <hr></hr>
        <MasVendidos />
        <Nosotros />
        <Footer />
        </Container>
  );
}

export default Inicio;
