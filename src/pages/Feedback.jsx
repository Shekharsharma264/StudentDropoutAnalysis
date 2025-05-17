import React from 'react';

const Feedback = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Feedback</h1>

      <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
        <p className="text-gray-700 text-lg">
          We value your feedback! Let us know what you think about the project or suggest improvements.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-800">Name (optional)</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800">Feedback</label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
