import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SignIn = () => {
  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    console.log('Submitting form')
    const users = JSON.parse(localStorage.getItem('users')) ;

    const user = users.find(u => u.email === values.email && u.password === values.password);
console.log(user)
    if (!user) {
      setErrors({ password: 'Invalid email or password' });
    } else {
      // Perform the necessary actions when authentication succeeds, such as redirecting to another page or setting an authentication token
      console.log('User authenticated');

    }

    setSubmitting(false);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          return errors;
        }}
        onSubmit={handleSubmit}
       
      >
        {({ isSubmitting }) => (
          <Form>
             <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
           
            <ErrorMessage name="email" component="div"  className='error'/>

            <label htmlFor="password">password</label>
            <Field type="password" name="password" />
           
            <ErrorMessage name="password" component="div"  className='error'/>
            <button type="submit" disabled={isSubmitting}>
              Sign-in
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
