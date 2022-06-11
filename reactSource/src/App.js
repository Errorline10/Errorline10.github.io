import { NavBar } from "./moduleLibrary/navBar.part";
import { ClientRouter } from "./router"

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container, Accordion, Row, Col } from 'react-bootstrap';

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" >
      <Container className="outSideContainer">
        {NavBar()}
        {ClientRouter()}
      </Container>
    </div >
  );
}

export default App;