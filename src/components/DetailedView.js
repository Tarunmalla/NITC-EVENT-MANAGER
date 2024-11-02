import React from 'react';

const DetailedView = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center mb-6">
        <div className="w-1/4">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full w-32 h-32"
          />
        </div>
        <div className="w-3/4 pl-6">
          <h2 className="text-2xl font-semibold">Student Name</h2>
          <p className="text-gray-600">Roll No: 123456</p>
          <p className="text-gray-600">Email: student@example.com</p>
          <p className="text-gray-600">Contact: +1234567890</p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Request Details</h3>
        <p className="text-gray-600"><strong>Title:</strong> Request Title</p>
        <p className="text-gray-600"><strong>Category:</strong> Request Category</p>
        <p className="text-gray-600"><strong>Description:</strong> Request Description</p>
        <p className="text-gray-600"><strong>Location:</strong> Request Location</p>
        <p className="text-gray-600"><strong>Time:</strong> Request Time</p>
        <p className="text-gray-600"><strong>Attached Documents:</strong> <a href="#" className="text-blue-500">Document Link</a></p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Comments</h3>
        <form>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
            placeholder="Add your comments here..."
          ></textarea>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailedView;