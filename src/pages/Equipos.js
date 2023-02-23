import { useEffect, useState } from "react";
import {Card, Col,Container, Row, Button, CardGroup } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Img from "../assets/img/KARCHERB250R.png";
import "../styles/Equipos.css";
//TailwindCss heredado desde App.js

function Equipos() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const _products = await fetch(
      "http://localhost:5001/admin-ae7ca/us-central1/getProductos?details=true"
    ).then((data) => data.json());
    setProducts(_products);
  }

  // const categorias = ["Barredoras y Lavadoras de Pisos",
  //                     "Equipos de Chancado, Molienda y clasificacion (Nuevos)",
  //                     "Generadores",
  //                     "Gruas Horquilla",
  //                     "Gruas Pluma",
  //                     "Maquinas Metalmecanicas",
  //                     "Maquinas para la construccion",
  //                     "Minicargadores",
  //                     "Puente Grua"
  //                    ]

  function productsList() {
    let PesoChileno = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CLP",
    });

    return products
      .filter((p) => p.categoria1_modelo === "Gruas Horquilla")
      .map((p) => (
        <Container>
            <Card>
              <Card.Img className= "card-img" variant="top" src={Img} />
              <Card.Body>
                <Card.Title className="marca">{p.fabricante_modelo}</Card.Title>
                <Card.Text className="opcion1">{p.opcion1_modelo}</Card.Text>
                <Card.Text className="modelo">{p.nombre_modelo}</Card.Text>
                {/* <Card.Text>{PesoChileno.format(p.precio_modelo)}</Card.Text> */}
                <Button variant="warning">Cotizar</Button>
              </Card.Body>
            </Card>
            </Container>
      ));
  }

  console.log(productsList());

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="equipos">
      <NavBar />
      <br></br>
      <br></br>
      <h1 className="titulo-categorias">Equipos</h1>
      <br></br>
      <h6>Muchas Gruas en Stock y diferentes buenas ofertas<br></br>
      Maquinas nunca usadas en Chile, igual que nuevas</h6>
      <div class="grid grid-cols-3 gap-0">
      {products.length === 0 ? <div>Loading...</div> : productsList()}
      </div>
    </div>
  );
}

export default Equipos;
