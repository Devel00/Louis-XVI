import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Card from "./Card";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const manage_problems = () => {
  return (
    <div className="">
      <Navbar />
      <div>
        <div className=" scale-90 m-2 grid grid-cols-4 gap-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Link to="/AddProblem">
            <div className="w-[90%] h-[450px] bg-bg-200 hover:bg-bg-300/70 rounded-[24px]  overflow-hidden shadow-xl flex flex-col  justify-center items-center">
              <CiCirclePlus className=" text-primary-100" size={90} />
              <div className=" font-main font-bold mb-2">
                اضافه كردن كارت مشكل
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default manage_problems;
