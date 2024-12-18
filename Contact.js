import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        We would love to hear from you! Please fill out the form below or reach out to us via email.
      </p>
      <form className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input 
            type="text" 
            id="name" 
            className="border border-gray-300 p-2 w-full rounded-lg" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input 
            type="email" 
            id="email" 
            className="border border-gray-300 p-2 w-full rounded-lg" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea 
            id="message" 
            className="border border-gray-300 p-2 w-full h-40 rounded-lg" 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
