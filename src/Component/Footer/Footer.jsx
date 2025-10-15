import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 font-sans rounded-2xl">
      <div className="max-w-7xl mx-auto">
        {/* Responsive grid for 4 columns with vertical separators (md: and up) */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:divide-x md:divide-gray-700">
          {/* Div 1: Logo/Details */}
          <div className="space-y-3 p-4">
            <h3 className="text-sm font-extrabold tracking-wide uppercase text-white">
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
                  Attestation Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Pro Servoces
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Government Approvals
                </a>
              </li>
              Legal Support services
              <li>
                <a href="#" className="hover:text-blue-400 transition"></a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Translation Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Brand Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Typing Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Corporate Tax
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Vat Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Div 3: Social Media */}
          <div className="space-y-3 p-4">
            <h3 className="text-lg font-bold">Social Media</h3>
            <div className="flex space-x-4">
              {/* Placeholder Social Icons - using lucide-react SVGs for visual appeal */}

              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    X
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Threads
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Face Book
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Attestation Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Snap Chat
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    you tube
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Div 4: Subscribe */}
          <div className="space-y-3 p-4">
            <h3 className="text-lg font-bold">Subscribe Now</h3>
            <p className="text-sm text-gray-400">
              Financial advisors can identify tax-saving opportunities, optimize
              investment
            </p>
            {/* <form className="flex"> */}
            {/* <input
                type="text"
                placeholder="Your Email iD"
                className="p-2 w-full text-white rounded-l-md focus:outline-none"
              /> */}
            <form className="flex">
              <input
                type="text"
                value="enter your Mail id"
                placeholder="Your Email iD"
                className="p-2 w-full text-black bg-white rounded-l-md focus:outline-none"
              />
            </form>
            {/* </form> */}
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
