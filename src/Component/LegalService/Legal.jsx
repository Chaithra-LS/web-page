// import React from "react";

// import Frame from "../../assets/Frame.png";
// import img1 from "../../assets/03.png";
// import img2 from "../../assets/04.png";
// import img3 from "../../assets/Countries.png";
// import img4 from "../../assets/img5.png";
// const Legal = () => {
//   return (
//     <div className="p-4">
//       <div className="w-full h-[600px] bg-black border-2 rounded-[4%] text-3xl font-bold">
//         <p className="text-white pt-16 ml-13 text-sm font-bold flex items-center">
//           <img
//             src={Frame}
//             alt="A descriptive alt text for Frame"
//             className="mr-2"
//           />
//           Why Choose Us legal service in dubai
//         </p>
//         <h1 className="text-white pt-16 ml-13 text-4xl font-bold flex items-center">
//           Our Legal Services in Dubai
//         </h1>
//       </div>

//       <div>
//         <div>
//           <img src={img1} alt="img1" />
//           <img src={img2} alt="img2" />
//           <img src={img3} alt="img3" />
//           <img src={img4} alt="img4" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Legal;
import React from "react";

import Frame from "../../assets/Frame.png";
import img1 from "../../assets/03.png";
import img2 from "../../assets/04.png";
import img3 from "../../assets/01.png";
import img4 from "../../assets/img5.png";

const Legal = () => {
  return (
    <div className="p-4">
      {/* This is the main black container where the images need to go */}
      <div className="w-full h-[600px] bg-black border-2 rounded-[4%] text-3xl font-bold">
        {/* Top text section */}
        <p className="text-white pt-13 ml-13 text-sm font-bold flex items-center">
          <img src={Frame} alt="Icon frame" className="mr-2" />
          Why Choose Us legal service in dubai
        </p>

        <h1 className="text-white pt-1 ml-13 text-4xl font-bold">
          Our Legal Services in Dubai
        </h1>

        {/* Images section moved inside the black div.
          Applying 'flex justify-around items-center' to arrange them horizontally
          and space them out nicely.
          'mt-10' adds a top margin for separation from the title.
        */}
        <div className="flex justify-around items-center mt-7">
          <img src={img3} alt="Legal Service 3" className="w-1/5" />
          <img src={img2} alt="Legal Service 2" className="w-1/6" />

          <img src={img1} alt="Legal Service 1" className="w-1/6" />

          <img src={img4} alt="Legal Service 4" className="w-1/6" />
        </div>
      </div>

      {/* The original empty div has been removed */}
    </div>
  );
};

export default Legal;
