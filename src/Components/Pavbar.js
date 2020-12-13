import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";
import "../styles/Pavbar.css";
function Pavbar() {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Planight</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Pavbar;
