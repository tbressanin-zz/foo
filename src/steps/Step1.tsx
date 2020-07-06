import React, { Component } from 'react';
import { Button, Form, } from 'react-bootstrap';
import FormService from '../services/form-service'
import { StateModel } from '../model/state.model';
import { Formik, Field, ErrorMessage } from 'formik';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import * as Yup from 'yup';
import Stepper from 'bs-stepper';

class FormStep1 extends Component {

  constructor(state: any) {
    super(state);
    console.log(this.state);
  }

  public state: StateModel = {
    loaded: false,
    formJson: null,
    validationSchema: Yup.object({})
  };

  setValidationSchema(fields: any[]) {
    //TODO
  }

  renderField() {
    console.log('props', this.props);
    return (

      <MDBContainer>
        <MDBRow>
          <MDBCol size="12">
            <form>
              <p className="h5 text-center mb-4 mt-5">Exemplo - Passo 1</p>
              <div className="grey-text">
                <Form.Control className="browser-default custom-select" as="select" custom>
                  {this.state?.formJson?.fields.map(
                       field => {
                      return <option>{field.name}</option>
                    })
                  }
                </Form.Control>
                <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                  success="right" />
                <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                  success="right" />
                <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
                  error="wrong" success="right" />
                <MDBInput label="Your password" icon="lock" group type="password" validate />
              </div>
              <div className="text-center">
                <MDBBtn color="primary">Próximo</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      // <Form.Group controlId="exampleForm.SelectCustom">
      //   <Form.Label>{this.state?.formJson?.detail}</Form.Label>

      // </Form.Group>
    )
  }

  async componentDidMount() {
    await FormService.getFormData().then((res: any) => {
      setTimeout(() => {
        this.setState({ formJson: res, loaded: true });
        this.setValidationSchema([]);
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

export default FormStep1
