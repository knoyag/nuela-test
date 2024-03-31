import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <div>
        <Navbar.Brand href="#">
          Profesores
        </Navbar.Brand>
        <div>Crea y gestiona los profesores</div>
      </div>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
