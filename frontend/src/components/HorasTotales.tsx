import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

interface Props {
  totalHorasSemana: number;
}

const HorasTotales: React.FC<Props> = ({ totalHorasSemana }) => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h6>Horas totales</h6>
            </Card.Header>
            <Card.Body>
              <h6>{totalHorasSemana} horas</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <h6>Horas lectivas</h6>
            </Card.Header>
            <Card.Body>
              <h6>{totalHorasSemana} horas</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <h6>Horas complementarias</h6>
            </Card.Header>
            <Card.Body>
              <h6>0 horas</h6>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HorasTotales;
