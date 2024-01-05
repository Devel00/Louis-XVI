import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Filter from "./Filter";
import "react-multi-carousel/lib/styles.css"
import { data } from "../data/data";

const Feet = () => {
  const [feet, setProblems] = useState();
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const ShowFeet = async () => {
      try {
        const response = await fetch(
          // "https://biglybigly.iran.liara.run/api/v1/foot/"             API LINK FOR FOOT
        );
        const result = await response.json();
        setProblems(result);
        setSuccess(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
      }
    };
    ShowFeet();
    //   ShowProblems();
  }, []);
  console.log(feet);
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
      <div className="py-[50px] flex justify-center mb-[500px] ">
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
          <Filter />
          <Filter />
      {/* <div className=" pt-6 flex justify-start gap-4 items-center">
        <span className=" text-accent-200  text-[20px] pr-4">پرطرفدارها</span>
        <div className=" border-b-2 border-bg-300/40 w-[80%]"></div>
        <div className=" flex justify-center items-center">
          <span className=" text-accent-200 pr-6">مشاهده همه</span>
          <MdKeyboardArrowLeft size={25} />
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Feet;
