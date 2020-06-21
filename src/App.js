import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//
// Escolha o exemplo
// Step(n).tsx
//
import FormBasic from './steps/Step1.tsx';

function App() {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <FormBasic />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
