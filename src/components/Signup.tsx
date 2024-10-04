import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      confirmPassword: Yup.string()
        
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: (values) => {
      console.log('Signup form data', values);
      // Handle signup logic here
    },
  });

  return (
    <div className="max-w-md p-6 mx-auto mt-10 border rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">Sign Up</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full p-2 border rounded"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-sm text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-full p-2 border rounded"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-sm text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className="w-full p-2 border rounded"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-sm text-red-500">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>

        <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
