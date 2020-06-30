import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import schema from './schema';
import './App.css';

function App() {

  function onSubmit(values, actions) {
    console.log('submit', values)
  }

  return (
    <div className="App">
      <Formik 
      validationSchema={schema}
      // Caso queira validar logo quando form entra na tela
      validateOnMount
      onSubmit={onSubmit}
      initialValues={{
        name: ''
      }}

        render={ ({ values, errors, touched, isValid }) => (
          <Form>
            <div>
              <label>Name</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" />
            </div>
            <div>
              <label>E-mail</label>
              <Field name="email" type="text" />
              <ErrorMessage name="email" />
            </div>
            <button type="submit" disabled={!isValid}>Enviar</button>
          </Form>
        )}
      />
    </div>
  );
}

export default App;
