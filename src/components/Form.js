import { useFormik } from 'formik';
import React from 'react';
import './form.css';

const Form = () => {
   const formik = useFormik({
      //@ property name must match the form field's name attribute
      //@ these are the initial values for input fields
      initialValues: {
         name: 'mizan',
         email: '',
         password: '',
      },
      onSubmit: (formValues) => {
         //@ this will run on the form submission
         console.log(formValues);
      },
   });
   return (
      <form onSubmit={formik.handleSubmit}>
         <input
            type='text'
            name='name'
            placeholder='name'
            value={formik.values.name}
            onChange={formik.handleChange}
         />{' '}
         <br />
         <input
            type='email'
            name='email'
            placeholder='email'
            value={formik.values.email}
            onChange={formik.handleChange}
         />{' '}
         <br />
         <input
            type='password'
            name='password'
            placeholder='password'
            value={formik.values.password}
            onChange={formik.handleChange}
         />{' '}
         <br />
         <button type='submit'>Submit</button>
      </form>
   );
};

export default Form;
