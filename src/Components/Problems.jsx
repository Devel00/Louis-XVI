import React from "react";
import Footer from "../Components/Footer";
import Navbar from "./Navbar";
import MainCarousel from "../Components/carousel";
import Filter from "./Filter";
import Card from "./Card";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LuMoreHorizontal } from "react-icons/lu";

const Problems = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="">
      <Navbar />
      <MainCarousel />
      <Filter />
      <div className=" pt-6 flex justify-start gap-4 items-center">
        <span className=" text-accent-200  text-[20px] pr-4">پرطرفدارها</span>
        <div className=" border-b-2 border-bg-300/40 w-[80%]"></div>
        <div className=" flex justify-center items-center">
          <span className=" text-accent-200 pr-6">مشاهده همه</span>
          <MdKeyboardArrowLeft size={25} />
        </div>
      </div>
      <Carousel
        showDots
        className=" scale-90 ml-4 h-[500px]"
        responsive={responsive}
      >
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div className="w-[90%] hover:cursor-pointer bg-bg-200 hover:bg-bg-300/70 rounded-[24px] h-[450px] shadow-xl flex flex-col  justify-center items-center">
          <LuMoreHorizontal className=" text-primary-100" size={90} />
          <div className=" font-main font-bold mb-2 text-accent-200">
            مشاهده همه کارت ها
          </div>
        </div>
      </Carousel>
      <div className=" pt-6 flex justify-start gap-4 items-center">
        <span className=" text-accent-200  text-[20px] pr-4">پر مشارکت ها</span>
        <div className=" border-b-2 border-bg-300/40 w-[80%]"></div>
        <div className=" flex justify-center items-center">
          <span className=" text-accent-200 pr-6">مشاهده همه</span>
          <MdKeyboardArrowLeft size={25} />
        </div>
      </div>
      <Carousel
        showDots
        className="scale-90 ml-4 h-[500px]"
        responsive={responsive}
      >
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div className="w-[90%] hover:cursor-pointer bg-bg-200 hover:bg-bg-300/70 rounded-[24px] h-[450px] shadow-xl flex flex-col  justify-center items-center">
          <LuMoreHorizontal className=" text-primary-100" size={90} />
          <div className=" font-main font-bold mb-2 text-accent-200">
            مشاهده همه کارت ها
          </div>
        </div>
      </Carousel>

      <Footer />
    </div>
  );
};

export default Problems;
