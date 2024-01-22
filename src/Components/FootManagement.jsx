import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Card from "./FCard";
import "react-multi-carousel/lib/styles.css"
import { data } from "../data/data";
import { LuMoreHorizontal } from "react-icons/lu";
import Carousel from "react-multi-carousel";
import Loading from "./Loading";
import { MdKeyboardArrowLeft } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Feet = () => {
  const [feet, setFeet] = useState();
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    AOS.init({duration:1200 })  //animation on scroll
    const ShowFeet = async () => {
      try {
        const response = await fetch(
           "https://biglybigly.iran.liara.run/api/v1/foot/foot"            // API LINK FOR FOOT
        );
        const result = await response.json();
        setFeet(result);
        setSuccess(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
      }
    };
    ShowFeet();
  }, []);
  console.log(feet);
  const responsive = {
    superLargeDesktop: {
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
      
      <div className="py-[100px] flex justify-center mb-[500px]" data-aos="fade-up">
          <img
            className="absolute w-[900px] object-cover"
            alt="Absolutvision"
            src={data[24].image}
          />
          <div className="absolute w-[900px] h-[600px] bg-[#ffffffbb] " />
          <p className="font-bold text-[#444444] text-[35px] absolute pt-[150px]">
            دنبال یک همراه و همپا می گردی؟  
          </p>
          <p className="font-bold text-[#444444] text-[60px] absolute pt-[220px]">
            خوب جایی اومدی
          </p>
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
        <Filter />
        </div>
    
        <div className="w-[100%] overflow-hidden" data-aos="zoom-in-left" data-aos-anchor-placement="center-bottom">
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
          feet.map((item, index) => (
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

export default Feet;
