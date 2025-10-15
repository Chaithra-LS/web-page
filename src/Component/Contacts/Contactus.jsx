import React from "react";

const Contactus = () => {
  return (
    // Outer Container: Light Blue Background (bg-blue-50)
    <div className="min-h-screen w-full bg-blue-50 py-16 px-4 flex justify-center font-sans">
      {/* Inner Card: White Background (bg-white) */}
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-3xl w-full text-center">
        {/* Header Content */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          Know about your query and popularly asked questions
        </p>

        <div className="space-y-4 text-left">
          {/* First Question */}
          <div className="p-4 border border-gray-200 rounded-lg flex justify-between items-center bg-gray-50">
            <h5 className="text-xl font-medium text-gray-800">
              How long does it take for a Legal Case?
            </h5>
            <span className="text-2xl text-gray-600">+</span>
          </div>

          {/* Second Question */}
          <div className="p-4 border border-gray-200 rounded-lg flex justify-between items-center bg-gray-50">
            <h5 className="text-xl font-medium text-gray-800">
              How can I get a personal Lawyer?
            </h5>
            <span className="text-2xl text-gray-600">+</span>
          </div>

          {/* Third Question Added */}
          <div className="p-4 border border-gray-200 rounded-lg flex justify-between items-center bg-gray-50">
            <h5 className="text-xl font-medium text-gray-800">
              Where can I check my case Progress?
            </h5>
            <span className="text-2xl text-gray-600">+</span>
          </div>
        </div>

        {/* Contact Button */}
        <button className="bg-black text-white px-8 py-3 rounded-full font-bold mt-10 hover:bg-gray-800 transition duration-150">
          Contact Us now ~ it's free
        </button>
      </div>
    </div>
  );
};

export default Contactus;
