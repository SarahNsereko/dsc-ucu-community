import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Signup.css';


const SignupForm = () => (

  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{ fullName: '', phone: '', email: '', password: '', confirmPassword: '' }}
      validate={values => {
        const errors = {};
      
        // Full Name validation
        if (!values.fullName) {
          errors.fullName = 'Required';
        } else if (!/^[\w]+[\s][\w]+$/.test(values.fullName)) {
          errors.fullName = 'Must be two words separated by a space';
        }

        // email validation 
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
      
        // Phone number validation
        if (!values.phone) {
          errors.phone = 'Required';
        } else if (!/^07\d{8}$/.test(values.phone)) {
          errors.phone = 'Must be 10 digits starting with 07';
        }
      
        // Password validation
        if (!values.password) {
          errors.password = 'Required';
        } else if (values.password.length < 8) {
          errors.password = 'Must be at least 8 characters';
        } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/.test(values.password)) {
          errors.password = 'Must contain at least one number and one special character';
        }
      
        if (values.password !== values.confirmPassword) {
          errors.confirmPassword = 'Passwords do not match';
        }
      
        return errors;
      }}

      
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          localStorage.setItem('signupdata', JSON.stringify(values));
         resetForm();
         window.location.href = '/login';  
        },1000);
      }}



      
    >

      
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="fullName">Full Name:</label>
          <Field type="text" name="fullName" id="fullName" />
          <ErrorMessage name="fullName" component="div" className="error" />

          <label htmlFor="phone">Phone:</label>
          <Field type="text" name="phone" id="phone" />
          <ErrorMessage name="phone" component="div" className="error"  />

          <label htmlFor="email">Email:</label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage name="email" component="div" className="error"  />

          <label htmlFor="password">Password:</label>
          <Field type="password" name="password" id="password" />
          <ErrorMessage name="password" component="div" className="error"  />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <Field type="password" name="confirmPassword" id="confirmPassword" />
          <ErrorMessage name="confirmPassword" component="div" className="error" />

          <button  type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignupForm;
