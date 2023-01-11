import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {LockOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";


function NavBar() {

  return (
    <Navbar  expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/home'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/home'>Nosotros</Nav.Link>
          
            <NavDropdown title="Productos"> /*Como lo hacemos Link?*/
              <NavDropdown.Item className="drop-item" href="#action/3.1">Barredoras</NavDropdown.Item>
              <NavDropdown.Item className="drop-item" href="#action/3.2">Lavadoras</NavDropdown.Item>
              <NavDropdown.Item className="drop-item" href="#action/3.3">Excavadoras</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="drop-item" href="#action/3.4">
                Separated link
              </NavDropdown.Item>
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
