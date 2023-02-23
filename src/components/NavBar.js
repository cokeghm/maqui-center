import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {LockOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

function NavBar() {

  return (
    <Navbar  expand="lg">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
            <Nav.Link href='#Nosotros'>Nosotros</Nav.Link>
          
            <NavDropdown title="Equipos"> 
              <NavDropdown.Item as={Link} to='/equipos' className="drop-item" >Barredoras y Lavadoras de Piso</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/equipos' className="drop-item" href="#cat2">Equipos de chancado, molienda y clasificación</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/equipos/cat' className="drop-item" href="#cat3">Generadores</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/equipos/cat4' className="drop-item" href="#cat4">Gruas Horquilla</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/equipos/cat5' className="drop-item" href="#cat5">Gruas Pluma</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/equipos/cat6' className="drop-item" href="#cat6">Maquinas Metalmecánicas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/equipos/cat7' className="drop-item" href="#cat7">Maquinas para la construcción</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/equipos/cat8' className="drop-item" href="#cat8">Minicargadores</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/equipos/cat9' className="drop-item" href="#cat9">Puente Grúa</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/contacto'>Contacto</Nav.Link>
          </Nav> 
             <Nav.Link as={Link} to='/login' className="login"><LockOutlined className="candado"/>Iniciar Sesión</Nav.Link>
             <Nav.Link as={Link} to='/register'className="register">Registrarse</Nav.Link>
             </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
