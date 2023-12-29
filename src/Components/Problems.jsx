import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "./Navbar";
import MainCarousel from "../Components/carousel";
import Filter from "./Filter";
import Card from "./Card";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LuMoreHorizontal } from "react-icons/lu";
import { data } from "../data/data";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineVolunteerActivism } from "react-icons/md";
// import "src/style.css";

const Problems = () => {
  const [problems, setProblems] = useState();
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const ShowProblems = async () => {
      try {
        const response = await fetch(
          "https://biglybigly.iran.liara.run/api/v1/problems/problems/"
        );
        const result = await response.json();
        setProblems(result);
        setSuccess(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
      }
    };
    ShowProblems();
    //   ShowProblems();
  }, []);
  console.log(problems);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const customDotListClass = "custom-dot-list";

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
        className=" scale-90 ml-4 mt-10 h-[600px]"
        responsive={responsive}
        dotListClass="custom-dot-list"
      >
        {success &&
          problems.map((item, index) => (
            <div key={index} className=" mb-14">
              <div className=" w-[80%] hover:scale-105 duration-700 hover:cursor-pointer h-[500px] bg-bg-200 hover:bg-bg-300/40 rounded-[24px]  shadow-xl flex flex-col  justify-center items-center">
                <img
                  className=" object-cover  w-[100%] h-[70%] mt-0 rounded-[16px]"
                  src={data[3].image}
                  alt="library"
                />
                <div className="px-6 py-4">
                  <div className=" font-main font-bold mb-2">{item.title}</div>
                  <div className="flex justify-between gap-4 mt-5">
                    {/* <div className=" bg-bg-100 p-2 gap-3 rounded-lg  flex  items-center justify-between">
                      <span className="font-main font-bold">2k</span>
                      <AiOutlineLike className=" text-primary-100" size={40} />
                    </div> */}
                    <div className=" bg-bg-100 p-2 px-10 mb-6 gap-4 rounded-lg flex justify-between items-center ">
                      <span className="font-main font-bold">
                        {item.financial_amount}
                      </span>
                      <MdOutlineVolunteerActivism
                        className=" text-primary-100"
                        size={40}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        <div className="w-[90%] hover:cursor-pointer bg-bg-200 hover:bg-bg-300/70 rounded-[24px] h-[450px] shadow-xl flex flex-col  justify-center items-center">
          <LuMoreHorizontal className=" text-primary-100" size={90} />
          <div className=" font-main font-bold mb-2 text-accent-200">
            مشاهده همه کارت ها
          </div>
        </div>
        <style>
          {`
          .${customDotListClass} {
            margin-bottom: 10px; 
          }
        `}
        </style>
      </Carousel>
      {/* <div className=" pt-6 flex justify-start gap-4 items-center">
        <span className=" text-accent-200  text-[20px] pr-4">پر مشارکت ها</span>
        <div className=" border-b-2 border-bg-300/40 w-[80%]"></div>
        <div className=" flex justify-center items-center">
          <span className=" text-accent-200 pr-6">مشاهده همه</span>
          <MdKeyboardArrowLeft size={25} />
        </div>
      </div>
      <Carousel
        showDots
        dotListClass="custom-dot-list"
        className="scale-90 ml-4 h-[600px] "
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
      </Carousel> */}

      <Footer />
    </div>
  );
};

export default Problems;
