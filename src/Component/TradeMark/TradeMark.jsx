// // import React from "react";
// // import img1 from "../../assets/banner.png";
// // import man from "../../assets/man.png";
// // import secondimage from "../../assets/secondimage.png";
// // const TradeMark = () => {
// //   return (
// //     <div>
// //       <img src={img1} alt="" />
// //       {/* <div>
// //         <h3>Trademark Registration</h3>
// //         <hr />
// //         <p>
// //           Our team ensures quick and accurate trademark registration so your
// //           brand identity is protected from unauthorized use.
// //         </p>
// //         <button>Apply Now</button>
// //       </div> */}

// //       <div className="bg-white p-6 rounded-lg shadow-md 'w-1/2'">
// //         {/* Header with black text */}
// //         <h3 className="text-xl font-semibold text-black mb-3">
// //           Trademark Registration
// //         </h3>

// //         {/* Horizontal line below the heading */}
// //         <hr className="my-3 border-gray-300" />

// //         {/* Paragraph with black text */}
// //         <p className="text-gray-700 mb-6">
// //           Our team ensures quick and accurate trademark registration so your
// //           brand identity is protected from unauthorized use.
// //         </p>

// //         {/* Button with yellow background and black text */}
// //         <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded transition duration-300">
// //           Apply Now
// //         </button>
// //       </div>
// //       <div>
// //         {/* <img src={man} alt="" />
// //         <img src={secondimage} alt="" /> */}

// //         <div className=" flex space-x-6 justify-center mt-6">
// //           {/* Added size and styling classes to the images for better appearance */}
// //           <img src={man} alt="Professional Man Placeholder" />
// //           <img src={secondimage} alt="Abstract Background Placeholder" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TradeMark;
// import React from "react";
// import img1 from "../../assets/banner.png";
// import man from "../../assets/man.png";
// import secondimage from "../../assets/secondimage.png";

// const TradeMark = () => {
//   return (
//     <div>
//       {/* 1. Container for Banner Image and Overlayed Card */}
//       <div className="relative">
//         <img src={img1} alt="Banner" className="w-full h-auto" />

//         {/* 2. The Card with Absolute Positioning (Top Right) */}
//         <div
//           className="absolute right-0 top-1/2 transform -translate-y-1/2
//                      bg-white p-6 rounded-l-lg shadow-2xl **w-1/4** max-w-sm
//                      md:w-1/3 md:p-8"
//         >
//           {/* Header with black text */}
//           <h3 className="text-xl font-semibold text-black mb-3">
//             Trademark Registration
//           </h3>

//           {/* Horizontal line below the heading */}
//           <hr className="my-3 border-gray-300" />

//           {/* Paragraph with black text */}
//           <p className="text-gray-700 mb-4 text-sm">
//             Our team ensures quick and accurate trademark registration so your
//             brand identity is protected from unauthorized use.
//           </p>

//           {/* The Input Field and Button */}
//           <form className="flex">
//             <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-r-md transition duration-300 whitespace-nowrap text-sm">
//               Apply Now
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* 3. The Images Section (Below the Banner) */}
//       {/* <div>
//         <div className="flex space-x-6 justify-center mt-6">
//           <img
//             src={man}
//             alt="Professional Man Placeholder"
//             className="w-64 h-64"
//           />
//           <img
//             src={secondimage}
//             alt="Abstract Background Placeholder"
//             className="w-64 h-64"
//           />
//         </div>
//       </div> */}

//       <div>
//         <div className="flex space-x-6 justify-center mt-6">
//           <img
//             src={man}
//             alt="Professional Man Placeholder"
//             className="w-100% h-100%"
//           />
//           <img
//             src={secondimage}
//             alt="Abstract Background Placeholder"
//             className="w-100% h-100%"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TradeMark;
import React from "react";
import img1 from "../../assets/banner.png";
import man from "../../assets/man.png";
import secondimage from "../../assets/secondimage.png";

const TradeMark = () => {
  return (
    <div>
      {/* 1. Container for Banner Image and Overlayed Card */}
      <div className="relative">
        {/* Banner image is w-full */}
        <img src={img1} alt="Banner" className="w-full h-auto" />

        {/* 2. The Card with Absolute Positioning (Top Right) */}
        <div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 
                     bg-white p-6 rounded-l-lg shadow-2xl w-1/4 max-w-sm 
                     md:w-1/3 md:p-8"
        >
          {/* Header with black text */}
          <h3 className="text-xl font-semibold text-black mb-3">
            Trademark Registration
          </h3>

          {/* Horizontal line below the heading */}
          <hr className="my-3 border-gray-300" />

          {/* Paragraph with black text */}
          <p className="text-gray-700 mb-4 text-sm">
            Our team ensures quick and accurate trademark registration so your
            brand identity is protected from unauthorized use.
          </p>

          {/* The Apply Now Button inside a form */}
          <form className="flex">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-r-md transition duration-300 whitespace-nowrap text-sm">
              Apply Now
            </button>
          </form>
        </div>
      </div>

      {/* 3. MODIFIED IMAGES SECTION (Below the Banner) */}
      <div className="flex justify-center">
        {/* This inner div will take the full width of its parent (which is usually the screen/container) */}
        <div className="flex space-x-6 justify-center mt-6 w-full">
          {/* Set the combined width of the two images to w-full.
            We use w-1/2 for each image, minus the space-x-6 gap. 
            To handle the gap, using w-1/2 will result in a slightly larger total width.
            A better approach is to use flex-1 to make them share the space equally.
            Since you are using w-100% (which isn't a valid Tailwind class), 
            I'll use w-1/2 for a simple side-by-side fit.
          */}
          <img
            src={man}
            alt="Professional Man Placeholder"
            className="w-1/2 h-auto"
          />
          <img
            src={secondimage}
            alt="Abstract Background Placeholder"
            className="w-1/2 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TradeMark;
