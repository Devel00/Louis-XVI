import React, { useNavigate } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Increase = () => {
  return (
    <div className=" ">
      <Navbar />
      <div className=" flex flex-col justify-center items-center">
        <div className=" shadow-lg flex flex-col w-[50%]  mt-16 mb-10  justify-center items-center">
          <div className=" bg-accent-100 w-full h-[80px] "></div>
          <div className=" flex flex-col items-start justify-center mt-6 ">
            <span className=" text-text-100 text-[16px] pr-2 font-semibold mb-1">
              مقدار
            </span>
            <input
              className=" shadow-md border border-bg-300/50 mb-10 rounded-[8px] mt-1 text-text-100 py-2 px-6 w-[400px] "
              type="text"
            ></input>
          </div>
          <Link to="/">
            <div className=" mt-6 mb-10 w-[400px] py-2 rounded-[8px] bg-accent-100 text-bg-100 font-semibold ">
              افزایش
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Increase;
