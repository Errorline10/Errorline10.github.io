import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container, Accordion, Row, Col } from 'react-bootstrap';

export function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/1630596596329.jfif" className="iconImage small" />
          Michael Boston's x-Pro MIT Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>)
}
