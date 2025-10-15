// import React, { useState } from "react";
// import { Menu, X, Globe } from "lucide-react"; // Globe icon is now imported

// // Dedicated Navbar Component
// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const menuItems = [
//     "Business Setup",
//     "Our Services",
//     "About Us",
//     "Contact Us",
//   ];

//   // Standard links for navigation (blue/white)
//   const standardLinkClasses =
//     "px-4 py-2 rounded-full font-medium transition duration-200 text-white hover:bg-sky-500";

//   // Special link (COST CALCULATOR) classes
//   const specialLinkClasses =
//     "px-4 py-2 rounded-full font-medium transition duration-200 bg-yellow-400 text-sky-700 hover:bg-yellow-300 shadow-lg font-bold";

//   return (
//     // The main navigation container, sticky and positioned on the page
//     <nav className="bg-blue-900 text-white sticky top-0 z-50 mt-[45px] rounded-xl max-w-full mx-[13px] shadow-2xl">
//       {/* Set the inner container to relative for absolute positioning of the center menu */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* h-20 defines the height of the entire navigation bar */}
//         <div className="flex justify-between items-center h-20">
//           {/* 1. LEFT: Logo. pl-4 applies 16px padding-left */}
//           <div className="text-3xl font-black tracking-wider cursor-pointer text-white z-20 pl-4">
//             LOGO
//           </div>

//           {/* 2. CENTER: Main Nav Links and COST CALCULATOR (Desktop Only, Centered) */}
//           <div className="hidden md:flex items-center absolute inset-0 justify-center pointer-events-none h-full">
//             <div className="flex items-center space-x-8 pointer-events-auto">
//               {/* Desktop Menu Links */}
//               <div className="flex space-x-2 lg:space-x-4 items-center">
//                 {menuItems.map((item) => (
//                   <a key={item} href="#" className={standardLinkClasses}>
//                     {item}
//                   </a>
//                 ))}
//               </div>

//               {/* COST CALCULATOR Link (Desktop) */}
//               <a href="#" className={specialLinkClasses}>
//                 COST CALCULATOR
//               </a>
//             </div>
//           </div>

//           {/* 3. RIGHT: Utility/Mobile Menu Button Group. Uses z-20 for visibility and clickability. */}
//           <div className="flex items-center space-x-4 h-full z-20">
//             {/* New Language/Utility Menu Block (Desktop Only) */}
//             <div className="hidden md:flex items-center space-x-3 h-full">
//               {/* Vertical line separator 1 (before ENG). Height is h-full. */}
//               <div className="h-full w-px bg-white/70 self-center" />

//               {/* Replaced the broken <img> with the Globe icon */}
//               <div className="flex items-center space-x-1">
//                 <Globe className="w-5 h-5" />
//                 <div className="text-base font-semibold py-1 hover:text-sky-200 cursor-pointer transition duration-150 ease-in-out">
//                   ENG
//                 </div>
//               </div>

//               {/* Vertical line separator 2 (after ENG). Height is h-full. */}
//               <div className="h-full w-px bg-white/70 self-center" />

//               <Menu
//                 className="w-6 h-6 cursor-pointer transition duration-150 ease-in-out hover:text-sky-200"
//                 aria-label="Utility Menu"
//               />
//               {/* No separator after Menu icon */}
//             </div>

//             {/* Mobile Menu Button (3 lines / X icon) */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition duration-150 ease-in-out"
//               aria-label="Toggle Mobile Menu"
//             >
//               {isMenuOpen ? (
//                 <X className="w-7 h-7" />
//               ) : (
//                 <Menu className="w-7 h-7" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//           isMenuOpen ? "max-h-96 opacity-100 py-3" : "max-h-0 opacity-0"
//         } bg-sky-700 rounded-b-xl`}
//       >
//         <div className="px-4 pt-2 pb-3 space-y-2 sm:px-3 flex flex-col items-start">
//           {menuItems.map((item) => (
//             <a
//               key={item}
//               href="#"
//               className="block w-full text-left rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-sky-600"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {item}
//             </a>
//           ))}

//           {/* COST CALCULATOR Link (Mobile) */}
//           <a className="w-full mt-4 block text-center rounded-full px-3 py-3 text-base font-bold bg-yellow-400 text-sky-700 hover:bg-yellow-300 shadow-md">
//             COST CALCULATOR
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Menu, X, Globe } from "lucide-react"; // Globe icon is now imported

// Dedicated Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Business Setup",
    "Our Services",
    "About Us",
    "Contact Us",
  ];

  // Standard links for navigation (blue/white)
  const standardLinkClasses =
    "px-4 py-2 rounded-full font-medium transition duration-200 text-white hover:bg-sky-500";

  // Special link (COST CALCULATOR) classes
  const specialLinkClasses =
    "px-4 py-2 rounded-full font-medium transition duration-200 bg-yellow-400 text-sky-700 hover:bg-yellow-300 shadow-lg font-bold";

  return (
    // The main navigation container, sticky and positioned on the page
    <nav className="bg-blue-900 text-white sticky top-0 z-50 mt-[45px] rounded-xl max-w-full mx-[13px] shadow-2xl">
      {/* Set the inner container to relative for absolute positioning of the center menu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* h-20 defines the height of the entire navigation bar */}
        {/* Layout uses justify-between to split Logo (left) and Utility (right), while maintaining a centered menu via absolute positioning. */}
        <div className="flex justify-between items-center h-20">
          {/* 1. LEFT: Logo. Visible on all screen sizes. */}
          <div className="text-3xl font-black tracking-wider cursor-pointer text-white z-20 pl-4">
            LOGO
          </div>

          {/* 2. CENTER: Main Nav Links and COST CALCULATOR (Desktop Only, Centered) */}
          {/* Uses absolute inset-0 to center the links while allowing the left/right items to take corners */}
          <div className="hidden md:flex items-center absolute inset-0 justify-center pointer-events-none h-full">
            <div className="flex items-center space-x-8 pointer-events-auto">
              {/* Desktop Menu Links */}
              <div className="flex space-x-2 lg:space-x-4 items-center">
                {menuItems.map((item) => (
                  <a key={item} href="#" className={standardLinkClasses}>
                    {item}
                  </a>
                ))}
              </div>

              {/* COST CALCULATOR Link (Desktop) */}
              <a href="#" className={specialLinkClasses}>
                COST CALCULATOR
              </a>
            </div>
          </div>

          {/* 3. RIGHT: Utility/Mobile Menu Button Group. This block is pushed to the far right. */}
          <div className="flex items-center space-x-4 h-full z-20">
            {/* New Language/Utility Menu Block (Desktop Only) */}
            <div className="hidden md:flex items-center space-x-3 h-full">
              {/* Vertical line separator 1 (before ENG). Height is h-full. */}
              <div className="h-full w-px bg-white/70 self-center" />

              {/* Globe icon */}
              <div className="flex items-center space-x-1">
                <Globe className="w-5 h-5" />
                <div className="text-base font-semibold py-1 hover:text-sky-200 cursor-pointer transition duration-150 ease-in-out">
                  ENG
                </div>
              </div>

              {/* Vertical line separator 2 (after ENG). Height is h-full. */}
              <div className="h-full w-px bg-white/70 self-center" />

              {/* The "3 line" Menu icon, now positioned at the "lat dead end" (far right) for desktop */}
              <Menu
                className="w-6 h-6 cursor-pointer transition duration-150 ease-in-out hover:text-sky-200"
                aria-label="Utility Menu"
              />
            </div>

            {/* Mobile Menu Button (3 lines / X icon) - Visible only on small screens */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition duration-150 ease-in-out"
              aria-label="Toggle Mobile Menu"
            >
              {isMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100 py-3" : "max-h-0 opacity-0"
        } bg-sky-700 rounded-b-xl`}
      >
        <div className="px-4 pt-2 pb-3 space-y-2 sm:px-3 flex flex-col items-start">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block w-full text-left rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-sky-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          {/* COST CALCULATOR Link (Mobile) */}
          <a className="w-full mt-4 block text-center rounded-full px-3 py-3 text-base font-bold bg-yellow-400 text-sky-700 hover:bg-yellow-300 shadow-md">
            COST CALCULATOR
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
