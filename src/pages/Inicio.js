import NavBar from "../components/NavBar";
import LogoBar from "../components/LogoBar";
import SearchBar from "../components/SearchBar";
import Banner from '../components/Banner';
import Categorias from '../components/Categorias';
import MasVendidos from '../components/MasVendidos';
import Nosotros from '../components/Nosotros'
import Footer from '../components/Footer';
import {Container} from 'react-bootstrap';
import "../styles/Inicio.css";

function Inicio() {
  return (
       <Container fluid>
        <NavBar/>
        <LogoBar/>
        <SearchBar />
        <Banner />
        <Categorias />
        <MasVendidos />
        <Nosotros />
        <Footer />
        </Container>
  );
}

export default Inicio;
