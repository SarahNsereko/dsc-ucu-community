import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SigninForm = () => {
  const [members, setMembers] = useState(JSON.parse(localStorage.getItem('members')) || [])
  const navigate = useNavigate();

  const handleSignin = (values, { setSubmitting }) => {
      const login = members.filter((member) => 
        member.email == values.email && member.password == values.password
      )
      console.log(login);
      if (login.length == 1) {
        alert('Successfully signed in')
        setSubmitting(false);
        navigate('/dashboard');
      } else {
        alert("Please enter the correct credentials or sign up")
      }
  };

  return (
    <div>
      <h1>Sign-in</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validate={(values) => {
          // ... validation logic ...

          const errors = {};

          // email validation
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }

          // Password validation
          if (!values.password) {
            errors.password = 'Required';
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleSignin(values, { setSubmitting });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" id="email" />
            <ErrorMessage name="email" component="div" className="error" />

            <label htmlFor="password">Password:</label>
            <Field type="password" name="password" id="password" />
            <ErrorMessage name="password" component="div" className="error" />

            <button type="submit" disabled={isSubmitting}>
              Signin
            </button>
          
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SigninForm;
