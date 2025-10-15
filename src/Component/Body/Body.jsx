// import { Scale } from "lucide-react";

// // // const Body = () => {
// // //   return (
// // //     <main className="flex  pt-24 px-34">
// // //       {/* Applied w-full for mobile, and lg:w-1/2 for 50% width on large screens */}
// // //       <div className="text-start w-full lg:w-1/2">
// // //         {/* Text is now left-aligned (text-start) and back to the requested 6xl/7xl size */}
// // //         {/* <h1 className="text-3xl font-black text-black leading-tight ">
// // //           HIGH QUALITY LEGAL CONSULTANCY
// // //           <br />
// // //           IN DUBAI
// // //         </h1> */}
// // //         {/* <h1 className="text-6xl font-black text-black leading-tight py-8 px-4 w-full">
// // //           HIGH QUALITY LEGAL CONSULTANCY
// // //           <br />
// // //           IN DUBAI
// // //         </h1> */}
// // //         <h1 className="text-3xl font-black text-black leading-tight py-8 px-4 w-full whitespace-nowrap">
// // //           HIGH QUALITY LEGAL
// // //           <br />
// // //           CONSULTANCY IN DUBAI
// // //         </h1>
// // //         <p className="py-8 px-4">
// // //           Take the stress out of legal filings. Trust XYZ Business Setup
// // //           Services to handle your case registration in Dubai Courts
// // //           professionally and efficiently. Contact us today for a consultation or
// // //           to begin your case filing.
// // //         </p>
// // //       </div>
// // //     </main>
// // //   );
// // // };

// // // export default Body;
// // import justice from "../../assets/justice.png";

// // const Body = () => {
// //   return (
// //     <main className="flex pt-24 px-34">
// //       {/* Applied w-full for mobile, and lg:w-1/2 for 50% width on large screens */}
// //       <div className="text-start w-full lg:w-1/2">
// //         {/* Text is now left-aligned (text-start) and back to the requested 6xl/7xl size */}
// //         <h1 className="text-3xl font-black text-black leading-tight py-8 px-4 w-full whitespace-nowrap">
// //           HIGH QUALITY LEGAL
// //           <br />
// //           CONSULTANCY IN DUBAI
// //         </h1>
// //         <p className="py-8 px-4">
// //           Take the stress out of legal filings. Trust XYZ Business Setup
// //           Services to handle your case registration in Dubai Courts
// //           professionally and efficiently. Contact us today for a consultation or
// //           to begin your case filing.
// //         </p>
// //       </div>
// //       {/* Justice image after the text section */}
// //       <div className="flex items-center justify-center w-full lg:w-1/2">
// //         <img src={justice} alt="Justice" className="max-w-full h-auto" />
// //       </div>
// //     </main>
// //   );
// // };

// // export default Body;

// import justice from "../../assets/justice.png";
// import img1 from "../../assets/Group 7.png";
// import img2 from "../../assets/Group 6.png";
// import img3 from "../../assets/Group 8.png";

// import a2 from "../../assets/a2.png";
// const Body = () => {
//   return (
//     <div>
//       <main className="flex justify-center pt-24 px-4 max-w-7xl mx-auto flex-col lg:flex-row">
//         <div className="text-start w-full lg:w-1/2 pr-8">
//           <h1 className="text-3xl font-black text-black leading-tight py-8 px-4 w-full whitespace-nowrap">
//             HIGH QUALITY LEGAL
//             <br />
//             CONSULTANCY IN DUBAI
//           </h1>
//           <p className="py-8 px-4 text-gray-700">
//             Take the stress out of legal filings. Trust XYZ Business Setup
//             Services to handle your case registration in Dubai Courts
//             professionally and efficiently. Contact us today for a consultation
//             or to begin your case filing.
//           </p>

//           <div className="px-4">
//             {/* <button className="mt-4 px-8 py-3 bg-sky-600 text-white font-bold rounded-full shadow-2xl hover:bg-sky-700 transition duration-300 transform hover:scale-[1.02]">
//             Book a Consultation Now
//           </button> */}

//             <div className="bg-black text-white px-3 py-2 rounded-lg text-sm font-medium inline-block mb-6 tracking-wide">
//               Let's simplify your Legal <img src={a2} alt="" />
//             </div>
//           </div>
//         </div>

//         <div className="flex items-center justify-center w-full lg:w-1/2">
//           <img
//             src={justice}
//             alt="Justice"
//             className="max-w-full h-auto mt-[-127px]"
//           />
//         </div>
//       </main>

//       <section className="mt-16 w-full max-w-7xl mx-auto px-4">
//         {/* This container uses a grid system: 1 column on mobile, 3 columns on medium (md) and up */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Image 1: Corporate Law (Placeholder for img1) */}
//           <div
//             className="shadow-xl rounded-lg overflow-hidden border
//          border-gray-100"
//           >
//             <img
//               src={img1}
//               alt="Corporate Law Image"
//               //   className="w-full h-auto"
//             />
//             <h1 className="text-xl pt-4">Complaint Filing Services</h1>
//             <p className="pt-4 pr-4 text-sm text-gray-500 leading-snug">
//               The process of filing a complaint with police or prosecution
//               authorities in Dubai is a legal process that needs proper
//               documentation, legal knowledge, and following the official
//               procedures to the end.
//             </p>
//           </div>

//           {/* Image 2: Dispute Resolution (Placeholder for img2) */}
//           <div className="shadow-xl rounded-lg overflow-hidden border  border-gray-100">
//             <img
//               src={img2}
//               alt="Dispute Resolution Image"
//               //   className="w-full h-auto"
//             />
//             <h1 className="text-xl pt-4">Expert Case Registration Support</h1>
//             <p className="pt-4 pr-4 text-sm text-gray-500 leading-snug">
//               Bringing a legal case to court in Dubai may prove difficult and
//               time consuming in case you are not conversant with the court
//               procedures here
//             </p>
//           </div>

//           {/* Image 3: Business Setup (Placeholder for img3) */}
//           <div className="shadow-xl rounded-lg overflow-hidden border  border-gray-100">
//             <img
//               src={img3}
//               alt="Business Setup Image"
//               //   className="w-full h-auto"
//             />
//             <h1 className="text-xl pt-4">Rental Dispute Center</h1>
//             <p className="pt-4 pr-4 text-sm text-gray-500 leading-snug">
//               Landlord and tenant rental disputes may be complex and time
//               consuming unless addressed professionally.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default Body;
import justice from "../../assets/justice.png";
import img1 from "../../assets/Group 7.png";
import img2 from "../../assets/Group 6.png";
import img3 from "../../assets/Group 8.png";
// FIX: Corrected import path by adding a forward slash between '..' and 'assets'
import a2 from "../../assets/a2.png";

const Body = () => {
  return (
    <div>
      <main className="flex justify-center pt-24 px-4 max-w-7xl mx-auto flex-col lg:flex-row">
        <div className="text-start w-full lg:w-1/2 pr-8">
          <h1 className="text-3xl font-black text-black leading-tight py-8 px-4 w-full whitespace-nowrap">
            HIGH QUALITY LEGAL
            <br />
            CONSULTANCY IN DUBAI
          </h1>
          <p className="py-8 px-4 text-gray-700">
            Take the stress out of legal filings. Trust XYZ Business Setup
            Services to handle your case registration in Dubai Courts
            professionally and efficiently. Contact us today for a consultation
            or to begin your case filing.
          </p>

          <div className="px-4">
            {/* MODIFICATION: Moved the <img> tag to appear before the text 
            and added a small margin to the right (mr-1) to create spacing.
            The div also uses 'flex' and 'items-center' to vertically align 
            the image and text nicely. 
            */}
            <div className="bg-black text-white px-3 py-2 rounded-lg text-sm font-medium inline-flex items-center mb-6 tracking-wide">
              Let's simplify your Legal &nbsp;{" "}
              <img src={a2} alt="Legal icon" className="mr-1 h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full lg:w-1/2">
          <img
            src={justice}
            alt="Justice"
            className="max-w-full h-auto mt-[-127px]"
          />
        </div>
      </main>

      <section className="mt-16 w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Image 1: Corporate Law (Placeholder for img1) */}
          <div className="shadow-xl rounded-lg overflow-hidden border border-gray-100 p-4">
            <img src={img1} alt="Corporate Law Image" />
            <h1 className="text-xl pt-4 font-semibold">
              Complaint Filing Services
            </h1>
            <p className="pt-4 pr-4 text-sm text-gray-500 leading-snug">
              The process of filing a complaint with police or prosecution
              authorities in Dubai is a legal process that needs proper
              documentation, legal knowledge, and following the official
              procedures to the end.
            </p>
          </div>

          {/* Image 2: Dispute Resolution (Placeholder for img2) */}
          <div className="shadow-xl rounded-lg overflow-hidden border border-gray-100 p-4">
            <img src={img2} alt="Dispute Resolution Image" />
            <h1 className="text-xl pt-4 font-semibold">
              Expert Case Registration Support
            </h1>
            <p className="pt-4 pr-4 text-sm text-gray-500 leading-snug">
              Bringing a legal case to court in Dubai may prove difficult and
              time consuming in case you are not conversant with the court
              procedures here
            </p>
          </div>

          {/* Image 3: Business Setup (Placeholder for img3) */}
          <div className="shadow-xl rounded-lg overflow-hidden border border-gray-100 p-4">
            <img src={img3} alt="Business Setup Image" />
            <h1 className="text-xl pt-4 font-semibold">
              Rental Dispute Center
            </h1>
            <p className="pt-4 pr-4 text-sm text-gray-500 leading-snug">
              Landlord and tenant rental disputes may be complex and time
              consuming unless addressed professionally.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Body;
