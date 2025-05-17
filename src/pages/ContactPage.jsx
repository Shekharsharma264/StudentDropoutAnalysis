import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Contact Us</h1>

      <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
        <p className="text-gray-700 text-lg">
          Have questions, suggestions, or want to collaborate? Feel free to reach out using the form below or through the contact details provided.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-800">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="border-t pt-4 text-sm text-gray-600">
          <p>Email: <a href="mailto:chandu@example.com" className="text-blue-600">chandu@example.com</a></p>
          <p>Phone: +91 00000 00000</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
