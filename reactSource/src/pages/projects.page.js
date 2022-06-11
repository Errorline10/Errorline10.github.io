import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container, Accordion, Row, Col } from 'react-bootstrap';
export function Projects() {
  return (
    <div>
      <h2>Projects</h2>

      <Accordion defaultActiveKey="0">

        <Accordion.Item eventKey="0">
          <Accordion.Header>PacMen Project</Accordion.Header>
          <Accordion.Body>
            <strong>Project Title:</strong> Pac-Men
            <br /><strong>GitHub Link: </strong><a href="https://github.com/Errorline10/pacmen">link</a>
            <br /><strong>descriptions: </strong>
            <br />This is a javascript project intended to show scope and code reusability. the add packman button pushes a pack man to the array. the code iterates over the array and updates each in tern. there is also collition detection to keep them from runninf off the sides of the screen.
            <br />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Eye Exercise Project</Accordion.Header>
          <Accordion.Body>
            <strong>Project Title:</strong> EyeExercise
            <br /><strong>GitHub Link: </strong><a href="https://github.com/Errorline10/EyeExercise">link</a>
            <br /><strong>descriptions: </strong>
            <br />This is a project that is ment to demonstrate the ability of javascript to track mouse movment via the "onmousemove" event. each time the event is triggered, the new location is calculated, and the "eye ball" position is changed programiticaly via css position.
            <br />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Real Time Bus Tracking Project</Accordion.Header>
          <Accordion.Body>
            <strong>Project Title:</strong> Real Time Bus Tracking
            <br /><strong>GitHub Link: </strong><a href="https://github.com/Errorline10/RealTimeBusTracker">link</a>
            <br /><strong>descriptions: </strong>
            <br />The real time bus tracking project is to show how a google map api can be implimented. a layer is also added to the map, that will show the location of the bus as it hits each stop on the way. the stations are added as GPS coordinates to the map.
            <br />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>


    </div>
  );
}
