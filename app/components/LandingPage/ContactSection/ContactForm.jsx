"use client"
import React from "react";
import { useFormik } from "formik";
import validationSchema from "@/app/lib/validationSchema";



const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      className="lg:grid lg:grid-cols-2 gap-8"
      onSubmit={formik.handleSubmit}
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 p-2 border border-gray-300 text-black rounded-md w-full"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500">{formik.errors.name}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 border border-gray-300 text-black rounded-md w-full"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500">{formik.errors.email}</div>
        )}
      </div>

      <div className="col-span-2 mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="10"
          className="mt-1 p-2 border border-gray-300 text-black rounded-md w-full"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message && (
          <div className="text-red-500">{formik.errors.message}</div>
        )}
      </div>

      <div className="col-span-2 text-right">
        <button
          type="submit"
          className="bg-blue-800 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
