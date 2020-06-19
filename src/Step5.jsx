import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap';
import data from "./data/form01.json";

//
// Gerar os campos do formulário
//
function generatorAllFields(arrFields) {

  // para cada campo, um formato diferente
  let generatorEachField = (field) => {
    switch (field.type) {
      case "short_text":
        return (
          <Form.Group key={field.id} controlId={"exampleForm." + field.id} >
            <Form.Label>{field.name}</Form.Label>
            <Form.Control type="text" name={field.id} placeholder={field.place_holder} />            
            <ErrorMessage name={field.id} />
          </Form.Group>
        )
      case "single_select":
        return (
          <Form.Group key={field.id} controlId={"exampleForm." + field.id}>
            <Form.Label>{field.name}</Form.Label>
            <Form.Control type="text" name={field.id} placeholder={field.place_holder} />            
            <ErrorMessage name={field.id} />
          </Form.Group>
        )
      case "dynamic_select":
        return (
          <Form.Group key={field.id} controlId={"exampleForm." + field.id}>
            <Form.Label>{field.name}</Form.Label>
            <Form.Control as="select" custom>
              <SelectOptions data={field.options} />
            </Form.Control>
            <ErrorMessage name={field.id} />
          </Form.Group>
        )
      default:
        return (<>field not found !</>)
    }
  }

  // laço nos campos do formulário
  return arrFields.map(generatorEachField);
}

//
// para gerar as `options` dos selects
//
class SelectOptions extends React.Component {
  getOption(field) {
    // console.log(field);
    return <option key={field.key} value={field.key}>{field.label}</option>
  }
  render() {
    return this.props.data.map(this.getOption);
  }
}

//
const initialValues = { firstName: '', lastName: '', email: '' };

//
const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
})

//
const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
}

//
const FormStep5 = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      <Form key={123}>
        {generatorAllFields(data.fields)}
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};

export default FormStep5;