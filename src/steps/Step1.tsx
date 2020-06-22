import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import FormService from '../services/form-service'
import { StateModel } from '../model/state.model';

class Controls extends Component {

  public state: StateModel = {
    loaded: false,
    formJson: null
  };

  renderField() {
    // console.log(field);
    console.log('form json', this.state.formJson);
    return (
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label>{this.state?.formJson?.detail}</Form.Label>
        <Form.Control as="select" custom>
          {this.state?.formJson?.fields.map(
            field => {
              return <option>{field.name}</option>
            })
          }
        </Form.Control>
      </Form.Group>
    )
  }

  async componentDidMount() {
    await FormService.getFormData().then((res: any) => {
      setTimeout(() => {
        this.setState({ formJson: res, loaded: true });
      }, 1000);
    });
  }

  render() {
    if (this.state.loaded) {
      return this.renderField();
    } else {
      return (<div>Loading</div>)
    }
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
