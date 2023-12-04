import React from "react";

const ContactForm = () => {
  return (
    <form className="lg:grid lg:grid-cols-2 gap-8">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-white"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-white"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
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
          rows="4"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        ></textarea>
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
