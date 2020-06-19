import React from 'react';
// import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//
// Escolha o exemplo
//
import FormBasic from './Step5';

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
