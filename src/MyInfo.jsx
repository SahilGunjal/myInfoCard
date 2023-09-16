import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import myImg from "./profile3.png";

function MyInfo() {
  return (
    <div className="flex flex-col justify-center items-center h-screen drop-shadow-2xl">
      <div className="bg-gradient-to-r from-green-300 to-green-300 lg:h-1/6 lg:w-2/5 h-1/6 w-3/4 p-5"></div>
      <div className="flex flex-col items-center bg-gradient-to-r from-green-100 to-green-50 lg:h-4/6 lg:w-2/5 p-10 h-3/4 w-3/4 border-t-4 border-green-500">
        <div className="bg-gradient-to-t from-pink-200 to-pink-200 h-[110px] w-[110px] lg:h-[140px] lg:w-[140px] rounded-full flex justify-center items-center my-[-100px] lg:my-[-120px] inset-0">
          <img
            src={myImg}
            alt="img"
            className="rounded-full h-24 w-24 lg:h-32 lg:w-32 drop-shadow-2xl opacity-100 hover:opacity-90"
          />
        </div>
        <div className="absolute flex-col flex-wrap m-7 p-3">
          <span className="text-gray-800 text-[32px] font-bold font-headfont">
            <a href="https://64dc36344fa4e100084cb994--bejewelled-dieffenbachia-0f6f0a.netlify.app/">
              Sahil Gunjal
            </a>
          </span>
          <div className="m-5">
            <p className="max-w-md  text-blue-700 text-[14px] sm:text-[16px] lg:text-[18px] font-myfont font-bold">
              Hello, I am Sahil Gunjal, I am currently pursuing my masters in
              Computer Science, at Rochester Institute of Technology, New York,
              USA. I love to travel, play cricket and watch series. <br />
              <span className="text-gray-800">
                Feel free to reach me out through following links.
              </span>
            </p>
          </div>
          <div className="flex flex-wrap gap-5 md:gap-10 justify-center mt-10 md:mt-14 m-5">
            <a href="https://64dc36344fa4e100084cb994--bejewelled-dieffenbachia-0f6f0a.netlify.app/">
              <FaGlobe className="text-xl sm:text-2xl lg:text-[32px] hover:text-blue-600" />
            </a>

            <a href="https://www.instagram.com/sahil_gunjal93/">
              <FaInstagram className="text-xl sm:text-2xl lg:text-[32px] hover:text-blue-600" />
            </a>
            <a href="https://www.facebook.com/sahil.gunjal/">
              <FaFacebookF className="text-xl sm:text-2xl lg:text-[32px] hover:text-blue-600" />
            </a>
            <a href="https://www.linkedin.com/in/sahil-gunjal-1590b51a1/">
              <FaLinkedinIn className="text-xl sm:text-2xl lg:text-[32px] hover:text-blue-600" />
            </a>
            <a href="https://github.com/SahilGunjal">
              <FaGithub className="text-xl sm:text-2xl lg:text-[32px] hover:text-blue-600" />
            </a>
          </div>
          <div className="mt-16 sm:mt-18  flex-col flex-wrap justify-center items-center">
            <p className="max-w-md font-bottomfont font-medium">
              {" "}
              Made by Sahil with &#9829;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyInfo;
