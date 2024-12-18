import React from 'react';
import { FaShieldAlt, FaUser, FaChartLine, FaLock, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800">Privacy Policy</h1>
        <p className="text-lg text-gray-600 mt-2">
          Your privacy is our top priority. Learn how we protect your information.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaUser className="mr-2 text-blue-500" /> What Information Do We Collect?
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          We collect various types of information to enhance your experience, including:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-600 mb-6">
          <li><strong>Personal Information:</strong> Any information you provide, such as your name, email address, and contact details.</li>
          <li><strong>Usage Data:</strong> Information about how you use our website, including your IP address, browser type, and pages visited.</li>
          <li><strong>Cookies:</strong> Small data files that we store on your device to enhance site functionality and performance.</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaChartLine className="mr-2 text-green-500" /> How Do We Use Your Information?
        </h2>
        <p className="text-lg text-gray-600 mb-4">The information we collect helps us to:</p>
        <ul className="list-disc list-inside text-lg text-gray-600 mb-6">
          <li>Provide and maintain our services effectively.</li>
          <li>Improve your browsing experience through personalization.</li>
          <li>Communicate with you about updates, offers, and important information.</li>
          <li>Analyze usage patterns to enhance our website's functionality.</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLock className="mr-2 text-red-500" /> Your Data is Safe with Us
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          We take the security of your data very seriously. We implement robust technical and organizational measures to safeguard your information. However, no method of transmission over the internet or electronic storage is completely secure. We strive to use commercially acceptable means to protect your personal information.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaShieldAlt className="mr-2 text-purple-500" /> Do We Share Your Information?
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Your trust is paramount. We do not sell or rent your personal information to third parties. We may share your information only in the following situations:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-600 mb-6">
          <li>With trusted partners who assist us in operating our website and services.</li>
          <li>To comply with legal obligations or protect our rights.</li>
          <li>In connection with a merger, acquisition, or sale of assets.</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaEnvelope className="mr-2 text-blue-500" /> Get in Touch
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          If you have any questions, concerns, or comments about this privacy policy, please don't hesitate to reach out to us at 
          <a href="mailto:support@example.com" className="text-blue-500 underline"> support@example.com</a>. We're here to help!
        </p>
      </div>
      
      <div className="text-center mt-8">
        <p className="text-lg text-gray-600">
          We may update this privacy policy occasionally. Any changes will be posted on this page, and we encourage you to review it periodically.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
