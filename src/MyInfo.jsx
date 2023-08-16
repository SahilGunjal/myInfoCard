import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function MyInfo() {
  return (
    <div className="flex flex-col justify-center items-center h-screen drop-shadow-2xl">
      <div className="bg-gradient-to-r from-green-300 to-green-300 lg:h-1/6 lg:w-2/5 h-1/6 w-3/4 p-5"></div>
      <div className="flex flex-col items-center bg-gradient-to-r from-green-100 to-green-50 lg:h-4/6 lg:w-2/5 p-10 h-3/4 w-3/4 border-t-4 border-green-500">
        <div className="bg-gradient-to-t from-pink-200 to-pink-200 h-[110px] w-[110px] lg:h-[140px] lg:w-[140px] rounded-full flex justify-center items-center my-[-100px] lg:my-[-120px]">
          <img
            src="./profile.jpg"
            alt="img"
            className="rounded-full h-26 w-26 lg:h-32 lg:w-32 drop-shadow-2xl"
          />
        </div>
        <div className="absolute flex-col flex-wrap m-7 p-3">
          <span className="text-purple-800 text-[32px] font-bold">
            <a href="https://64dc36344fa4e100084cb994--bejewelled-dieffenbachia-0f6f0a.netlify.app/">
              Sahil Gunjal
            </a>
          </span>
          <div className="m-5">
            <p className="max-w-md text-gray-600 text-[16px]">
              Hello I am Sahil Gunjal, I am currently pursuing my masters in
              Computer Science, at Rochester Institute of Technology, New York,
              USA. I love to travel, play cricket and watch series. <br />
              Feel free to reach me out through following links.
            </p>
          </div>
          <div className="flex flex-wrap gap-10 justify-center mt-14 m-5 ">
            <a
              href="https://64dc36344fa4e100084cb994--bejewelled-dieffenbachia-0f6f0a.netlify.app/"
              className="icon-link transition duration-200 ease-in-out hover:text-blue-600">
              <FaGlobe size={30} />
            </a>

            <a
              href="https://www.instagram.com/sahil_gunjal93/"
              className="icon-link transition duration-200 ease-in-out hover:text-blue-600">
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.facebook.com/sahil.gunjal/"
              className="icon-link transition duration-200 ease-in-out hover:text-blue-600">
              <FaFacebookF size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/sahil-gunjal-1590b51a1/"
              className="icon-link transition duration-200 ease-in-out hover:text-blue-600">
              <FaLinkedinIn size={30} />
            </a>
            <a
              href="https://github.com/SahilGunjal"
              className="icon-link transition duration-200 ease-in-out hover:text-blue-600">
              <FaGithub size={30} />
            </a>
          </div>
          <div className="mt-20 flex-col justify-end bottom-0">
            <p className="max-w-md">&copy; Reserved to Sahil Gunjal.</p>
            <p className="max-w-md"> Made by Sahil with &#9829;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyInfo;

{
  /* 
<div className="mt-5 absolute font-bold text-[24px] p-5 flex-col">
          <span className="text-blue-700">Sahil </span>{" "}
          <span className="text-blue-700"> Gunjal </span>
        </div>
      </div> */
}
