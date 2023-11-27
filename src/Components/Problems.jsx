import React from "react";
import Footer from "../Components/Footer";
import Navbar from "./Navbar";
import Carousel from "../Components/carousel";
import Filter from "./Filter";
import Card from "./Card";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Problems = () => {
  return (
    <div className="">
      <Navbar />
      <Carousel />
      <Filter />
      <div className=" pt-6 flex justify-start gap-4 items-center">
        <span className=" text-accent-200  text-[20px] pr-4">پرطرفدارها</span>
        <div className=" border-b-2 border-bg-300/40 w-[80%]"></div>
        <div className=" flex justify-center items-center">
          <span className=" text-accent-200 pr-6">مشاهده همه</span>
          <MdKeyboardArrowLeft size={25} />
        </div>
      </div>
      <div className="">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Problems;
