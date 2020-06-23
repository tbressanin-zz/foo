import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import data from "../services/form.json";

//
//
//
function generatorAllFields(arrFields: any) {

  let generatorEachField = (field: any) => {
    return (
      <>
        <label htmlFor="{field.id}">{field.name}</label>
        <Field name="{field.id}" type="text" />
        <ErrorMessage name="{field.id}" />
      </>
    )
  }

  return arrFields.map(generatorEachField);
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
const onSubmit = (values: any, { setSubmitting }: any) => {
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