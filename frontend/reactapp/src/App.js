import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="logo" href="#home">MK Attractions</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
            <Nav.Link className="nav-link" href="#attractions">Attractions</Nav.Link>
            <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>
            <NavDropdown title="Register/Sign In" id="basic-nav-dropdown">
              <NavDropdown.Item className="nav-link" href="#register">Register</NavDropdown.Item>
              <NavDropdown.Item className="nav-link" href="#sign-in">Sign In</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
