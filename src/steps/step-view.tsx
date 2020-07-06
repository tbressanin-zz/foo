import React, { Component, useState } from 'react';
import { Button, Form, } from 'react-bootstrap';
import FormService from '../services/form-service'
import { StateModel } from '../model/state.model';
import { Formik, Field, ErrorMessage } from 'formik';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import * as Yup from 'yup';
import Stepper from 'bs-stepper';
import FormStep1 from './Step1';
import FormStep2 from './Step2';
import FormStep3 from './Step3';
import FormStep4 from './Step4';
import FormStep5 from './Step5';

class StepView extends Component {

    constructor(props: any) {
        super(props);
        const actionState = {
            isActive: true,
            displayNext: true,
            displayPrevious: false,
            displaySubmit: false
        };
    }

    render() {
        let view;
        switch ((this.props as any).currentView) {
            case 1:
                view = <FormStep1 />;
                break;
            case 2:
                view = <FormStep2 />;
                break;
            case 3:
                view = <FormStep3 />;
                break;
            case 4:
                view = <FormStep4 />;
                break;
            case 5:
                view = <FormStep5 />;
                break;
            default:
            //TODO
        }
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="6" className="offset-3" middle={true}>
                        {view}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }

    componentWillUpdate() {
        console.log('update!!');
    }


}

export default StepView
