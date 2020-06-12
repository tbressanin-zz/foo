import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import data from "./data/form01.json";

// console.log(data.fields);

// console.log(data.fields.map(function(i) {
//   console.log(i);
// }));


class Controls extends Component {
  renderField(field) {
    // console.log(field);
    return (
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label>{field.name}</Form.Label>
        <Form.Control as="select" custom>
          <option>option 1</option>
          <option>option 2</option>
          <option>option 3</option>
          <option>option 4</option>
        </Form.Control>
      </Form.Group>
    )
  }
  render() {
    // if (data.fields.length === 0) {
    //   return <p>Nenhum item</p>
    // }
    return data.fields.map(this.renderField)
  }
}


function App() {
  return (
    <div className="App">
      <Form>
        <Controls />
      </Form>
      <Button onClick={() => console.log('oi')}>Salvar</Button>
    </div>
  );
}

export default App;
