import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 font-sans rounded-2xl">
      <div className="max-w-7xl mx-auto">
        {/* Responsive grid for 4 columns with vertical separators (md: and up) */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:divide-x md:divide-gray-700">
          {/* Div 1: Logo/Details */}
          <div className="space-y-3 p-4">
            <h3 className="text-lg font-extrabold tracking-wide uppercase text-black">
              LOGO
            </h3>
            <p className="text-sm text-gray-400">
              XYZ Business Setup Services Your gateway to starting a business in
              the UAE Financial advisors can identify tax-saving opportunities,
              optimize investment +971 50 357 8243 xyz@gmail.com Office #1801,
              The Prism Tower - Al Mustaqbal St - Business Bay - Dubai
            </p>

            <div className="space-y-1 text-sm text-gray-400">
              <p className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                +971 50 357 8243
              </p>
              <p className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7"
                  ></path>
                </svg>
                xyz@gmail.com
              </p>
              <p className="flex items-start">
                <svg
                  className="w-4 h-4 mr-2 mt-1 text-blue-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                Office #1801, The Prism Tower - Al Mustaqbal St - Business Bay -
                Dubai
              </p>
            </div>
          </div>

          {/* Div 2: Services */}
          <div className="space-y-3 p-4">
            <h3 className="text-lg font-bold">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Business Setup
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Visa Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Company Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Trade License Renewal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  PRO Services
                </a>
              </li>
            </ul>
          </div>

          {/* Div 3: Social Media */}
          <div className="space-y-3 p-4">
            <h3 className="text-lg font-bold">Social Media</h3>
            <div className="flex space-x-4">
              {/* Placeholder Social Icons - using lucide-react SVGs for visual appeal */}
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.77l-.44 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-pink-500 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.71.01 3.68.05 3.32.14 4.8.84 5.92 1.95a7.9 7.9 0 011.95 5.92c.04.97.05 1.25.05 3.68v.64c0 2.43-.01 2.71-.05 3.68-1.07 3.32-1.78 4.8-2.9 5.92a7.9 7.9 0 01-5.92 1.95c-.97.04-1.25.05-3.68.05H8.38c-2.43 0-2.71-.01-3.68-.05-3.32-1.07-4.8-1.78-5.92-2.9a7.9 7.9 0 01-1.95-5.92c-.04-.97-.05-1.25-.05-3.68v-.64c0-2.43.01-2.71.05-3.68 1.07-3.32 1.78-4.8 2.9-5.92a7.9 7.9 0 015.92-1.95c.97-.04 1.25-.05 3.68-.05h.64zM12 4.2c-3.11 0-4.04.01-4.75.05-2.07.1-3.13.56-3.81 1.23a5.7 5.7 0 00-1.23 3.81c-.04.71-.05 1.64-.05 4.75v.64c0 3.11.01 4.04.05 4.75.07 2.07.54 3.13 1.23 3.81a5.7 5.7 0 003.81 1.23c.71.04 1.64.05 4.75.05h.64c3.11 0 4.04-.01 4.75-.05 2.07-.1 3.13-.56 3.81-1.23a5.7 5.7 0 001.23-3.81c.04-.71.05-1.64.05-4.75v-.64c0-3.11-.01-4.04-.05-4.75-.07-2.07-.54-3.13-1.23-3.81a5.7 5.7 0 00-3.81-1.23c-.71-.04-1.64-.05-4.75-.05h-.64zM12 9a3 3 0 100 6 3 3 0 000-6zm0 1.9a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2zM18.8 3.5a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-blue-700 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.528-4 0v5.604h-3v-11h3v1.765c1.397-2.185 5-2.27 5 3.258v5.977z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Div 4: Subscribe */}
          <div className="space-y-3 p-4">
            <h3 className="text-lg font-bold">Subscribe</h3>
            <p className="text-sm text-gray-400">
              Get the latest updates and offers directly in your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 w-full text-gray-900 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="p-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition"
              >
                GO
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} XYZ Business Setup Services. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
