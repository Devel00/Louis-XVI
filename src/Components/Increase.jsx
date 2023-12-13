import React, { useContext, useNavigate } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { MyContext } from "../Components/Profile";

const Increase = () => {
  const [showModal, setShowModal] = useContext(MyContext);

  return (
    <div className=" flex w-full fixed h-full bg-text-100/30 z-50  flex-col justify-center items-center">
      <div className=" fixed inset-10 top-[80px] right-[10%]  w-[80%] z-50 bg-bg-200 h-[600px]">
        <div className=" hover:scale-105 absolute  right-1 top-1 p-4">
          <AiOutlineClose
            size={30}
            onClick={() => setShowModal(false)}
            className="   shadow-md p-1 rounded-full  bg-bg-100  cursor-pointer text-primary-100"
          />
        </div>
        <div className=" flex flex-col  justify-center items-center">
          <div className=" shadow-lg flex flex-col w-[50%]  mt-16 mb-10  justify-center items-center">
            <div className=" bg-accent-100 w-full h-[80px] "></div>
            <div className=" flex flex-col items-start justify-center mt-6 ">
              <span className=" text-text-100 text-[16px] pr-2 font-semibold mb-1">
                افزایش
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
      </div>
    </div>
  );
};

export default Increase;
