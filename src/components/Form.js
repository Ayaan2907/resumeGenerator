// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const InputForm = () => (
  <div>
    <h1>Enter Your Details Please</h1>
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        address: "",
        website: "",
        summary: "",
        skills: "",
        // skills: {
        //   proficient: "",
        //   familiar: "",
        //   general: ""
        // },
        education: {},
        experience: {},
        projects: {},
        awards: {},
        languages: {},
        interests: {},
      }}
      // validate={(values) => {
      //   const errors = {};
      //   if (!values.email) {
      //     errors.email = "Required";
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   ) {
      //     errors.email = "Invalid email address";
      //   }
      //   return errors;
      // }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="name">
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label>
            Phone :
          <Field type="number" name="phone" />
          <ErrorMessage name="phone" component="div" />
          </label>
          <label>
            Address
            <Field type="text" name="address" />
            <ErrorMessage name="address" component="div" />
          </label>
          <label>
            Website
            <Field type="text" name="website" />
            <ErrorMessage name="website" component="div" />
          </label>

          <label>
            Summary
            {/* <Field type="text" name="summary" /> */}
            <textarea name="summary" id="summary" cols="30" rows="10"></textarea>
            <ErrorMessage name="summary" component="div" />
          </label>

          {/* <Field type="text" name="skills" />
          <ErrorMessage name="skills" component="div" /> */}

          {/* <button type="submit" disabled={isSubmitting}> */}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default InputForm;
