import { Image, Col, Row, Container } from 'react-bootstrap';
import cat1 from "../assets/img/cat-1.jpg";
import cat2 from "../assets/img/cat-2.jpg";
import cat3 from "../assets/img/cat-3.jpg";
import cat4 from "../assets/img/cat-4.jpg";
import cat5 from "../assets/img/cat-5.jpg";

function Categorias() {
  return (
    <div>
      <h4 className="titulo-categorias">CATEGORIAS</h4>
      <Container>
        <Row>
          <Col md="4">
            <Image fluid src={cat1} alt="" />
            <h5 href="/home">Barredoras y lavadoras de piso</h5>
          </Col>
          <Col md="4" >
            <Image fluid src={cat2} alt="" />
            <h5>Equipos de chancado, molienda y clasificacion</h5>
          </Col>
          <Col md="4">
            <Image fluid src={cat3} alt="" />
            <h5>Generadores</h5>
          </Col>
        </Row>
        <Row>
        <Col md="4">
            <Image fluid src={cat4} alt="" />
            <div class="inner-text">
              <h5>Gruas Horquillas</h5>
            </div>
          </Col>
          <Col md="4">
            <Image fluid src={cat5} alt="" />
            <div class="inner-text">
              <h5>Grúas pluma</h5>
            </div>
          </Col >
          <Col md="4">
            <Image fluid src={cat5} alt="" />
            <div class="inner-text">
              <h5>Maquinas Metalmecánicas</h5>
            </div>
          </Col >
        </Row >
        <Row>
        <Col md="4">
          <Image fluid src={cat5} alt="" />
            <div class="inner-text">
              <h5>Maquinas para la construcción</h5>
            </div>
          </Col>
          <Col md="4">
            <Image fluid src={cat5} alt="" />
            <div class="inner-text">
              <h5>Mini cargadores</h5>
            </div>
          </Col >
          <Col md="4">
             <Image fluid src={cat5} alt="" />
            <div class="inner-text">
              <h5>Puente grúa</h5>
            </div>
          </Col >
        </Row >
      </Container>
    </div >
  );
}

export default Categorias;