import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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
          <>
            <label htmlFor="{field.id}">{field.name}</label>
            <Field name="{field.id}" />
            <ErrorMessage name="{field.id}" />
          </>
        )
      case "single_select":
        return (
          <>
            <label htmlFor="{field.id}">{field.name}</label>
            <Field name="{field.id}" />
            <ErrorMessage name="{field.id}" />
          </>
        )
      case "dynamic_select":
        return (
          <>
            <label htmlFor="{field.id}">{field.name}</label>
            <Field name="{field.id}" as="select" placeholder="Favorite Color">
              <SelectOptions data={field.options} />
            </Field>

            <ErrorMessage name="{field.id}" />
          </>
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
    console.log(field);
    return <option value={field.key}>{field.label}</option>
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
const FormStep3 = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      <Form>
        {generatorAllFields(data.fields)}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormStep3;