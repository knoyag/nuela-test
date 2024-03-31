import React from 'react';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendar, faChalkboardTeacher, faUsers, faSchool, faList, faBell, faCog, faBars } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Sidebar: React.FC = () => {
  return (
    <Container className="sidebar sidebar-container" style={{ width: '250px' }}> 
      <Row className="align-items-center bg-light text-dark p-2"> 
        <Col>
          <div className="d-flex align-items-center">
            <div>
              <Image
                src="/tajamar.png"
                alt="Tajamar"
                roundedCircle
                style={{ width: '32px', height: '32px', filter: 'brightness(150%)' }} 
              />
              <span className="ml-2" style={{ color: '#6c757d' }}>Tajamar</span> 
            </div>
            <div className="ms-auto">
              <Badge pill bg="success">J</Badge>
              <Badge pill bg="primary" className="ms-1"></Badge>
            </div>
          </div>
        </Col>
      </Row>
      <Row nogutters className="bg-light py-2 px-3">
        <Col>
          <FontAwesomeIcon icon={faHome} />
          <span className="text-muted ml-2">Inicio</span>
        </Col>
      </Row>
      <Row nogutters className="bg-light py-2 px-3">
        <Col>
          <FontAwesomeIcon icon={faCalendar} />
          <span className="text-muted ml-2">Horarios</span>
        </Col>
      </Row>
      <Row nogutters className="bg-light py-2 px-3">
        <Col>
          <FontAwesomeIcon icon={faChalkboardTeacher} />
          <span className="text-muted ml-2">Profesores</span>
        </Col>
      </Row>
      <Row nogutters className="bg-light py-2 px-3">
        <Col>
          <FontAwesomeIcon icon={faUsers} />
          <span className="text-muted ml-2">Familias</span>
        </Col>
      </Row>
      <Row nogutters className="bg-light py-2 px-3">
        <Col>
          <FontAwesomeIcon icon={faSchool} />
          <span className="text-muted ml-2">Espacios</span>
        </Col>
      </Row>
      <Row nogutters className="bg-light py-2 px-3">
        <Col>
          <FontAwesomeIcon icon={faList} />
          <span className="text-muted ml-2">Asignaturas</span>
        </Col>
      </Row>
      <Row nogutters className="bg-light py-2 px-3">
        <Col>
          <FontAwesomeIcon icon={faBell} />
          <span className="text-muted ml-2">Notificaciones</span>
        </Col>
      </Row>
      <Row nogutters className="bg-light py-2 px-3">
        <Col>
          <FontAwesomeIcon icon={faCog} />
          <span className="text-muted ml-2">Settings</span>
        </Col>
      </Row>
      <Row nogutters className="bg-light py-2 px-3">
        <Col>
          <FontAwesomeIcon icon={faBars} />
          <span className="text-muted ml-2">Toggle</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
