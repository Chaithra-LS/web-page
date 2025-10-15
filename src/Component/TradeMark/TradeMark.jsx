import React from "react";
import img1 from "../../assets/banner.png";
import man from "../../assets/man.png";
import secondimage from "../../assets/secondimage.png";
const TradeMark = () => {
  return (
    <div>
      <img src={img1} alt="" />
      <div>
        <h3>Trademark Registration</h3>
        <hr />
        <p>
          Our team ensures quick and accurate trademark registration so your
          brand identity is protected from unauthorized use.
        </p>
        <button>Apply Now</button>
      </div>
      <div>
        {/* <img src={man} alt="" />
        <img src={secondimage} alt="" /> */}

        <div className=" flex space-x-6 justify-center mt-6">
          {/* Added size and styling classes to the images for better appearance */}
          <img src={man} alt="Professional Man Placeholder" />
          <img src={secondimage} alt="Abstract Background Placeholder" />
        </div>
      </div>
    </div>
  );
};

export default TradeMark;
