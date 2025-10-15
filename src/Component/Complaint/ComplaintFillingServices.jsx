// // // import React from "react";
// // // import img1 from "../../assets/complaint1.png";
// // // import img2 from "../../assets/complaint2.png";
// // // import img3 from "../../assets/complaint3.png";
// // // const ComplaintFillingServices = () => {
// // //   return (
// // //     <div>
// // //       <div className="text-black pt-13 ml-13 text-2xl font-bold flex items-center">
// // //         ComplaintFillingServices
// // //       </div>
// // //       <div>
// // //         <div>
// // //           <img src={img1} alt="" />
// // //           <h3 className="text-blue-500   text-xl">Legal Complaint</h3> <br />
// // //           <img src={img3} alt="" />
// // //           <p>Lodging a complaint in the right legal channels</p>
// // //           <img src={img3} alt="" />
// // //           <p>Be it personal, commercial or criminal issues</p>
// // //         </div>
// // //         <div>
// // //           <img src={img2} alt="" />
// // //           <h3 className="text-blue-500   text-xl">
// // //             {" "}
// // //             Our Complaint Filing Services
// // //           </h3>{" "}
// // //           <br />
// // //           <img src={img3} alt="" />
// // //            individuals, companies, and legal representatives in need of help
// // //           with criminal, civil, or commercial complaints.
// // //           <img src={img3} alt="" /> You are a resident, visitor or a corporate
// // //           entity; got you covered.
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ComplaintFillingServices;
// // import React from "react";
// // import img1 from "../../assets/complaint1.png";
// // import img2 from "../../assets/complaint2.png";
// // import img3 from "../../assets/complaint3.png";

// // const ComplaintFillingServices = () => {
// //   return (
// //     <div className="container mx-auto p-4">
// //       {/* Title Section */}
// //       <div className="text-gray-900 pt-12 text-2xl md:text-3xl font-bold mb-8 text-center">
// //         Complaint Filling Services
// //       </div>

// //       {/* Content Section: Uses Flexbox for inline display on medium screens and up */}
// //       <div className="flex flex-col md:flex-row md:space-x-8">
// //         {/* First Content Block */}
// //         <div className="md:w-1/2 p-4 border rounded-lg shadow-md mb-6 md:mb-0">
// //           {/* *** CHANGE: Flex container for Icon and Heading *** */}
// //           <div className="flex items-center mb-4">
// //             <img
// //               src={img1}
// //               alt="Legal Complaint Icon"
// //               className="w-12 h-12 mr-4"
// //             />
// //             <h3 className="text-blue-600 text-xl font-semibold">
// //               Legal Complaint
// //             </h3>
// //           </div>

// //           <div className="flex items-start mb-2">
// //             <img src={img3} alt="Bullet Point" className="w-4 h-4 mr-2 mt-1" />
// //             <p className="text-gray-700">
// //               Lodging a complaint in the right legal channels
// //             </p>
// //           </div>

// //           <div className="flex items-start">
// //             <img src={img3} alt="Bullet Point" className="w-4 h-4 mr-2 mt-1" />
// //             <p className="text-gray-700">
// //               Be it personal, commercial or criminal issues
// //             </p>
// //           </div>
// //         </div>

// //         {/* Second Content Block */}
// //         <div className="md:w-1/2 p-4 border rounded-lg shadow-md">
// //           {/* *** CHANGE: Flex container for Icon and Heading *** */}
// //           <div className="flex items-center mb-4">
// //             <img
// //               src={img2}
// //               alt="Our Services Icon"
// //               className="w-12 h-12 mr-4"
// //             />
// //             <h3 className="text-blue-600 text-xl font-semibold">
// //               Our Complaint Filing Services
// //             </h3>
// //           </div>

// //           <div className="flex items-start mb-2">
// //             <img src={img3} alt="Bullet Point" className="w-4 h-4 mr-2 mt-1" />
// //             <p className="text-gray-700">
// //               Assisting individuals, companies, and legal representatives in
// //               need of help with criminal, civil, or commercial complaints.
// //             </p>
// //           </div>

// //           <div className="flex items-start">
// //             <img src={img3} alt="Bullet Point" className="w-4 h-4 mr-2 mt-1" />
// //             <p className="text-gray-700">
// //               Whether you are a resident, visitor, or a corporate entity, we've
// //               got you covered.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ComplaintFillingServices;
// import React from "react";
// import img1 from "../../assets/complaint1.png";
// import img2 from "../../assets/complaint2.png";
// import img3 from "../../assets/complaint3.png";

// import img4 from "../../assets/legalservice.png";

// // Helper component for styled number blocks
// const NumberedBlock = ({ number, title, children }) => (
//   <div>
//     {/* Style the number and title together as a black block */}
//     <div className="flex items-center mb-2 p-2 bg-gray-900 rounded">
//       <span className="text-xl font-normal text-white mr-3">{number}.</span>
//       <p className="text-lg font-normal text-white">{title}</p>
//     </div>
//     <ul className="list-disc pl-10 text-gray-700 space-y-1">{children}</ul>
//   </div>
// );

// const ComplaintFillingServices = () => {
//   return (
//     <div className="container mx-auto p-4">
//       {/* Title Section */}
//       <div className="text-gray-900 pt-12 text-2xl md:text-3xl font-bold mb-8 text-center">
//         Complaint Filling Services
//       </div>

//       {/* Two Column Content (The main service offerings) */}
//       <div className="flex flex-col md:flex-row md:space-x-8 mb-12">
//         {/* First Content Block */}
//         <div className="md:w-1/2 p-4 border rounded-lg shadow-md mb-6 md:mb-0">
//           <div className="flex items-center mb-4">
//             <img
//               src={img1}
//               alt="Legal Complaint Icon"
//               className="w-12 h-12 mr-4"
//             />
//             <h3 className="text-blue-600 text-xl font-semibold">
//               Legal Complaint
//             </h3>
//           </div>

//           <div className="flex items-start mb-2">
//             <img src={img3} alt="Bullet Point" className="w-4 h-4 mr-2 mt-1" />
//             <p className="text-gray-700">
//               Lodging a complaint in the right legal channels
//             </p>
//           </div>

//           <div className="flex items-start">
//             <img src={img3} alt="Bullet Point" className="w-4 h-4 mr-2 mt-1" />
//             <p className="text-gray-700">
//               Be it personal, commercial or criminal issues
//             </p>
//           </div>
//         </div>

//         {/* Second Content Block */}
//         <div className="md:w-1/2 p-4 border rounded-lg shadow-md">
//           <div className="flex items-center mb-4">
//             <img
//               src={img2}
//               alt="Our Services Icon"
//               className="w-12 h-12 mr-4"
//             />
//             <h3 className="text-blue-600 text-xl font-semibold">
//               Our Complaint Filing Services
//             </h3>
//           </div>

//           <div className="flex items-start mb-2">
//             <img src={img3} alt="Bullet Point" className="w-4 h-4 mr-2 mt-1" />
//             <p className="text-gray-700">
//               Assisting individuals, companies, and legal representatives in
//               need of help with criminal, civil, or commercial complaints.
//             </p>
//           </div>

//           <div className="flex items-start">
//             <img src={img3} alt="Bullet Point" className="w-4 h-4 mr-2 mt-1" />
//             <p className="text-gray-700">
//               Whether you are a resident, visitor, or a corporate entity, we've
//               got you covered.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* NEW CONTENT SECTION: Process Steps and Advantages */}
//       <div className="mt-12 p-6 border-t-2 border-blue-500">
//         {/* Removed ** symbols */}
//         <p className="text-lg text-gray-800 mb-6">
//           We provide complete assistance in filing complaints to the Dubai
//           Police and the Public Prosecution without any legal issues and
//           inconvenience.
//         </p>

//         <h4 className="text-xl font-bold text-gray-900 mb-4">
//           Our Process Steps:
//         </h4>
//         <div className="space-y-6">
//           {/* Step 1: Drafting Complaints (Using Helper Component) */}
//           <NumberedBlock number={1} title="Drafting Complaints">
//             <li>
//               Write formal complaints professionally according to the laws of
//               UAE.
//             </li>
//             <li>
//               All the content should be translated into Arabic to be valid and
//               submitted officially.
//             </li>
//           </NumberedBlock>

//           {/* Step 2: Reporting to Police/Prosecution Authorities (Using Helper Component) */}
//           <NumberedBlock
//             number={2}
//             title="Reporting to Police/Prosecution Authorities"
//           >
//             <li>
//               Report grievance to the appropriate department (Dubai Police,
//               Public Prosecution or other concerned legal authority).
//             </li>
//             <li>
//               Make sure that all the supporting documents are legal and
//               procedural.
//             </li>
//           </NumberedBlock>

//           {/* Step 3: Follow Up and Co-ordination (Using Helper Component) */}
//           <NumberedBlock number={3} title="Follow Up and Co-ordination">
//             <li>Keep track of the complaint and report on a regular basis.</li>
//             <li>
//               Help in any other document, legal clarification or additional
//               information needed.
//             </li>
//           </NumberedBlock>

//           {/* Step 4: Advantages (Using Helper Component) */}
//           <NumberedBlock
//             number={4}
//             title="Advantages of Our Complaint Filing in Dubai"
//           >
//             {/* The content below should be normal black color text */}
//             <li>
//               <span className="font-normal text-black">
//                 **Legal Compliance**: All complaints are made and filed as per
//                 the laws of UAE.
//               </span>
//             </li>
//             <li>
//               <span className="font-normal text-black">
//                 **Fast & Correct Filing**: We make sure that all the documents
//                 are filled and on time.
//               </span>
//             </li>
//             <li>
//               <span className="font-normal text-black">
//                 **End to End Support**: We can take care of the whole process on
//                 your behalf drafting to follow up.
//               </span>
//             </li>
//           </NumberedBlock>
//         </div>
//       </div>
//       <hr />
//       {/* <div>
//         <img src={img4} alt="" /> <h3>Why Cho ose Us legal service in dubai</h3>
//         <div>
//           Document Attestation
//           <hr />
//           <p>
//             we provide attestation services for educational, personal, and
//             commercial documents, making them valid for use in UAE government
//             offices and abroad.
//           </p>
//         </div>
//         <div>
//           Legal Translation Services
//           <hr />
//           <p>
//             Certified translations for documents in multiple languages, accepted
//             by all UAE authorities, ministries, and embassies.
//           </p>
//         </div>
//         <div>
//           Agreement Drafting & Related Work
//           <hr />
//           <p>
//             Professional drafting and reviewing of MOAs, shareholder agreements,
//             contracts, and other legal documents to safeguard your business
//             interests.
//           </p>
//         </div>
//         <div>
//           Trademark Registration & IP Protection
//           <hr />
//           <p>
//             Protect your brand, logo, and intellectual property with end-to-end
//             trademark registration and IP advisory services.
//           </p>
//         </div>
//         <div>
//           Share Sale / Purchase Agreements
//           <hr />
//           <p>
//             Complete assistance with drafting, notarizing, and executing share
//             transfer agreements, ensuring smooth business transitions.
//           </p>
//         </div>
//         <div>
//           Document Clearing & Approvals
//           <hr />
//           <p>
//             Fast-tracked approvals and clearance from government entities such
//             as DED, Immigration, Ministry of Labor, and more.
//           </p>
//         </div>
//       </div> */}

//     </div>
//   );
// };

// export default ComplaintFillingServices;
import React from "react";
// Assuming paths are correct
import img1 from "../../assets/complaint1.png";
import img2 from "../../assets/complaint2.png";
import img3 from "../../assets/complaint3.png";
import img4 from "../../assets/legalservice.png";
import img5 from "../../assets/wooden-gavel 1.png";

// Helper component for styled number blocks
const NumberedBlock = ({ number, title, children }) => (
  <div>
    {/* Style the number and title together as a black block */}
    <div className="flex items-center mb-2 p-2 bg-gray-900 rounded">
      <span className="text-xl font-normal text-white mr-3">{number}.</span>
      <p className="text-lg font-normal text-white">{title}</p>
    </div>
    <ul className="list-disc pl-10 text-gray-700 space-y-1">{children}</ul>
  </div>
);

const ComplaintFillingServices = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Title Section (Existing) */}
      <div className="text-gray-900 pt-12 text-2xl md:text-3xl font-bold mb-8 text-center">
        Complaint Filling Services
      </div>

      {/* Two Column Content (The main service offerings) */}
      <div className="flex flex-col md:flex-row md:space-x-8 mb-12">
        {/* First Content Block (Legal Complaint) */}
        <div className="md:w-1/2 p-4 border rounded-lg shadow-md mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            <img
              src={img1}
              alt="Legal Complaint Icon"
              className="w-12 h-12 mr-4"
            />
            <h3 className="text-blue-600 text-xl font-semibold">
              Legal Complaint
            </h3>
          </div>
          <div className="flex items-start mb-2">
            <img src={img3} alt="Bullet Point" className="w-4 h-4 mr-2 mt-1" />
            <p className="text-gray-700">
              Lodging a complaint in the right legal channels
            </p>
          </div>
          <div className="flex items-start">
            <img src={img3} alt="Bullet Point" className="w-4 h-4 mr-2 mt-1" />
            <p className="text-gray-700">
              Be it personal, commercial or criminal issues
            </p>
          </div>
        </div>

        {/* Second Content Block (Our Services) */}
        <div className="md:w-1/2 p-4 border rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img
              src={img2}
              alt="Our Services Icon"
              className="w-12 h-12 mr-4"
            />
            <h3 className="text-blue-600 text-xl font-semibold">
              Our Complaint Filing Services
            </h3>
          </div>
          <div className="flex items-start mb-2">
            <img src={img3} alt="Bullet Point" className="w-4 h-4 mr-2 mt-1" />
            <p className="text-gray-700">
              Assisting individuals, companies, and legal representatives in
              need of help with criminal, civil, or commercial complaints.
            </p>
          </div>
          <div className="flex items-start">
            <img src={img3} alt="Bullet Point" className="w-4 h-4 mr-2 mt-1" />
            <p className="text-gray-700">
              Whether you are a resident, visitor, or a corporate entity, we've
              got you covered.
            </p>
          </div>
        </div>
      </div>

      {/* Process Steps (Existing) */}
      <div className="mt-12 p-6 border-t-2 border-blue-500">
        <p className="text-lg text-gray-800 mb-6">
          We provide complete assistance in filing complaints to the Dubai
          Police and the Public Prosecution without any legal issues and
          inconvenience.
        </p>

        <div className="space-y-6">
          {/* <NumberedBlock number={1} title="Drafting Complaints"> */}
          <p>1.Drafting Complaints</p>
          <li>
            Write formal complaints professionally according to the laws of UAE.
          </li>
          <li>
            All the content should be translated into Arabic to be valid and
            submitted officially.
          </li>
          {/* </NumberedBlock> */}
          {/* <NumberedBlock
            number={2}
            title="Reporting to Police/Prosecution Authorities"
          > */}
          2.Reporting to Police/Prosecution Authorities
          <li>
            Report grievance to the appropriate department (Dubai Police, Public
            Prosecution or other concerned legal authority).
          </li>
          <li>
            Make sure that all the supporting documents are legal and
            procedural.
          </li>
          {/* </NumberedBlock> */}
          {/* <NumberedBlock number={3} title="Follow Up and Co-ordination"> */}
          <p>3.Follow Up and Co-ordination</p>
          <li>Keep track of the complaint and report on a regular basis.</li>
          <li>
            Help in any other document, legal clarification or additional
            information needed.
          </li>
          {/* </NumberedBlock> */}
          {/* <NumberedBlock
            number={4}
            title="Advantages of Our Complaint Filing in Dubai"
          > */}
          <p>4.Advantages of Our Complaint Filing in Dubai</p>
          <li>
            <span className="font-normal text-black">
              Legal Compliance: All complaints are made and filed as per the
              laws of UAE.
            </span>
          </li>
          <li>
            <span className="font-normal text-black">
              Fast & Correct Filing: We make sure that all the documents are
              filled and on time.
            </span>
          </li>
          <li>
            <span className="font-normal text-black">
              End to End Support: We can take care of the whole process on your
              behalf drafting to follow up.
            </span>
          </li>
          {/* </NumberedBlock> */}
        </div>
      </div>

      {/* --- MODIFIED SECTION: WHY CHOOSE US --- */}
      <div className="mt-12 p-6 border-t-2 border-blue-500">
        {/* Section Header */}
        <div className="flex items-center mb-8">
          <img
            src={img4}
            alt="Legal Services Icon"
            className="w-16 h-16 mr-4"
          />
          <h3 className="text-2xl md:text-3xl font-bold text-blue-600">
            Why Choose Us for Legal Services in Dubai
          </h3>
        </div>

        {/* 3-Column Layout: Col 1 (41%) | Col 2 (41%) | Image (18%) */}
        {/* The new custom grid template for 41% / 41% / 18% */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[41%_41%_18%]">
          {/* COLUMN 1: Services 1-3 (41% width) */}
          <div className="space-y-6">
            {/* Service 1: Document Attestation */}
            <div className="p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-lg font-semibold text-black mb-1">
                Document Attestation
              </h4>
              <hr className="my-2 border-blue-300 w-1/4" />
              <p className="text-gray-600 text-sm">
                We provide attestation services for educational, personal, and
                commercial documents, making them valid for use in UAE
                government offices and abroad.
              </p>
            </div>

            {/* Service 2: Legal Translation Services */}
            <div className="p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-lg font-semibold text-black mb-1">
                Legal Translation Services
              </h4>
              <hr className="my-2 border-blue-300 w-1/4" />
              <p className="text-gray-600 text-sm">
                Certified translations for documents in multiple languages,
                accepted by all UAE authorities, ministries, and embassies.
              </p>
            </div>

            {/* Service 3: Agreement Drafting & Related Work */}
            <div className="p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-lg font-semibold text-black mb-1">
                Agreement Drafting & Related Work
              </h4>
              <hr className="my-2 border-blue-300 w-1/4" />
              <p className="text-gray-600 text-sm">
                Professional drafting and reviewing of MOAs, shareholder
                agreements, contracts, and other legal documents to safeguard
                your business interests.
              </p>
            </div>
          </div>

          {/* COLUMN 2: Services 4-6 (41% width) */}
          <div className="space-y-6">
            {/* Service 4: Trademark Registration & IP Protection */}
            <div className="p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-lg font-semibold text-black mb-1">
                Trademark Registration & IP Protection
              </h4>
              <hr className="my-2 border-blue-300 w-1/4" />
              <p className="text-gray-600 text-sm">
                Protect your brand, logo, and intellectual property with
                end-to-end trademark registration and IP advisory services.
              </p>
            </div>

            {/* Service 5: Share Sale / Purchase Agreements */}
            <div className="p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-lg font-semibold text-black mb-1">
                Share Sale / Purchase Agreements
              </h4>
              <hr className="my-2 border-blue-300 w-1/4" />
              <p className="text-gray-600 text-sm">
                Complete assistance with drafting, notarizing, and executing
                share transfer agreements, ensuring smooth business transitions.
              </p>
            </div>

            {/* Service 6: Document Clearing & Approvals */}
            <div className="p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-lg font-semibold text-black mb-1">
                Document Clearing & Approvals
              </h4>
              <hr className="my-2 border-blue-300 w-1/4" />
              <p className="text-gray-600 text-sm">
                Fast-tracked approvals and clearance from government entities
                such as DED, Immigration, Ministry of Labor, and more.
              </p>
            </div>
          </div>

          {/* COLUMN 3: Image (18% width) */}
          <div className="flex items-center justify-center p-4">
            <img
              src={img5} // Used the gavel image for this section
              alt="Why Choose Us Legal Services"
              // w-full makes the image fill the 18% container
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintFillingServices;
