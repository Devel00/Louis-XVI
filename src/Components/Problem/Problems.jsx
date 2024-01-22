import React, { useEffect, useState } from "react";
import Footer from "../Global/Footer";
import Navbar from "../Global/Navbar";
import MainCarousel from "./carousel";
import Filter from "../Filter";
import Card from "./PCard";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LuMoreHorizontal } from "react-icons/lu";
import { data } from "../../data/data";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import Loading from "../Global/Loading";
// import "src/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Problems = () => {
  const [problems, setProblems] = useState();
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    AOS.init({duration:1200 })  //animation on scroll
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
      <div data-aos="fade-down" data-aos-anchor-placement="bottom-center"> <Navbar />
      </div><div className="my-[50px] max-w-[1500px] mx-auto" data-aos="flip-left" data-aos-anchor-placement="top-bottom"><MainCarousel />
      </div><div data-aos="fade-down" data-aos-anchor-placement="top-center"><Filter /></div>
      <div data-aos="zoom-in-left" data-aos-anchor-placement="center-bottom">
      {success &&
      <div className=" pt-6 flex justify-start gap-4 items-center">
        <span className=" text-accent-200  text-[20px] pr-4">پرطرفدارها</span>
        <div className=" border-b-2 border-bg-300/40 w-[80%]"></div>
        <div className=" flex justify-center items-center">
          <span className=" text-accent-200 pr-6">مشاهده همه</span>
          <MdKeyboardArrowLeft size={25} />
        </div>
      </div>
      }
      { success &&
      <Carousel
        showDots
        className=" animate-fade scale-90 ml-4 mt-10 h-[600px]"
        responsive={responsive}
        dotListClass="custom-dot-list"
      >
        {success &&
          problems.map((item, index) => (
            <Card detail={item} />
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
      }
      {! success &&
      <Loading/>
      }
      </div>
      <Footer />
    </div>
  );
};

export default Problems;
