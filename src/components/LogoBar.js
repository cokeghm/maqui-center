import LogoImg from "../assets/img/logo.png";
import { PhoneFilled } from "@ant-design/icons";
import {Container, Col, Row, Image } from "react-bootstrap";

function LogoBar() {
  return (
    <div>
  <Container className="logobar">
    <Row>
      <Col>
        <Image className="img-logo" src={LogoImg} alt="logo display"/>  
      </Col>
      <Col flex className="phone-img">
        <PhoneFilled className="tel-icon" />
      </Col>
      <Col >
        <Row className="fono"><p style={{color:'black'}}>Contacto</p>(+56) 2 2623 3000</Row>
      </Col>
    </Row>
  </Container>
      </div>
  )
}

export default LogoBar;
