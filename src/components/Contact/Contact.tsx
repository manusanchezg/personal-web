import React from "react";
import { useIsSideBarOpen } from "../../hooks";
import { Formik } from "formik";

export const Contact = () => {
  const { isSidebarOpen } = useIsSideBarOpen();
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center pl-5 dark:text-white dark:bg-gray-900 max-md:w-screen ${
        isSidebarOpen ? "blur-sm" : ""
      }`}
    >
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          subject: "",
          comments: "",
        }}
        validate={(values) => {
          const errors = {
            email: "",
            password: "",
            name: "",
            subject: "",
            comments: "",
          };
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col justify-center">
              <label className="text-sm">Name:</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="border-gray-400 border-b-2 p-2 focus:outline-none focus:border-blue-500 w-96"
              />
            </div>
            <div className="flex flex-col justify-center">
              <label className="text-sm">Email:</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="border-gray-400 border-b-2 p-2 focus:outline-none focus:border-blue-500 w-96"
              />
            </div>
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
            <div className="flex flex-col justify-center">
              <label className="text-sm">Subject:</label>
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
                className="border-gray-400 border-b-2 p-2 focus:outline-none focus:border-blue-500 w-96"
              />
            </div>
            <div className="flex flex-col justify-center">
              <label className="text-sm">Comments:</label>
              <textarea
                name="comments"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comments}
                className="border-gray-400 border-b-2 p-2 focus:outline-none focus:border-blue-500 w-96"
              />
            </div>
            {errors.comments && touched.comments && (
              <p className="text-red-500 text-xs">{errors.comments}</p>
            )}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
