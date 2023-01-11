import LogoImg from "../assets/img/logo.png";
import { PhoneFilled } from "@ant-design/icons";
import {Container, Col, Row, Image } from "react-bootstrap";

function LogoBar() {
  return (
    <div>
  <Container className="logobar">
    <Row>
      <Col>
        <Image className="img-logo" src={LogoImg} alt="logo display" style={{ width: "22rem" }}/>  
      </Col>
      <Col md="auto" className="phone-img">
        <PhoneFilled className="tel-icon" />
      </Col>
      <Col md lg="2">
        <Row className="fono">Fono</Row>
        <Row className="contacto">(+56) 2 2623 3000</Row>
      </Col>
      </Row>
      </Container>
      </div>
  )
}

export default LogoBar;
