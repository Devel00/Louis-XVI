import React, { useEffect,useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { data } from "../../data/data";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () =>{
  useEffect(() => {
    AOS.init({duration:1200 })  //animation on scroll
  })

  return (
    <div className="  w-full">
      <Navbar />
      <div className=" w-full flex flex-row justify-center items-center p-4 py-[100px] pb-[200px]">
      <div className=" w-[40%] p-20 rounded-[30px] flex flex-col justify-center items-center bg-bg-200/50 shadow-md" data-aos="fade-left" data-aos-anchor-placement="top-center">
      <span className=" text-[30px] text-accent-200 font-bold pb-10">
        خوش آمدید به همپا!
      </span>
      <span className=" text-[22px] text-[#000000] font-bold text-justify">
در همپا، ما به عنوان یک استارتاپ پویا باور داریم که به وسیله یافتن هم‌مسیرها و راه‌حل‌های خلاقانه، مشکلات روزمره را برای شما آسان می‌کنیم. از اولین روز تأسیس، هدف ما این بوده است که یک جامعه فعّال از افراد با ایده‌ها و مشکلات مشترک ایجاد کنیم و آن‌ها را به یکدیگر متصل کنیم.
      </span>
      <div className=" pt-10 flex flex-row justify-center items-center">
      <span className=" text-[22px] text-accent-200 font-bold pl-3">
        شماره تلفن :  
      </span>
      <span className=" font-bold text-[20px]">021-77389010</span>
      <div className="w-[370px]"></div>
      </div>
      <div className=" flex flex-row pt-2 justify-start">
      <span className=" text-[22px] text-accent-200 font-bold pl-3 ">
        آدرس شرکت : 
      </span>
      <span className=" font-bold text-[20px]">تهرانپارس، خیابان هنگام، جنب میدان الغدیر، پلاک 14</span>
      <div className="w-[70px]"></div>
      </div>
      </div>
      <div className=" w-[40%] justify-center relative " data-aos="fade-right" data-aos-anchor-placement="top-center">
        {/*Overlay */}
        <div
          className=" absolute w-full h-full max-h-[800px] rounded-[30px]
           bg-[#FFFFFFBB] flex flex-col justify-center mr-20">
          <span
            className="font-bold text-accent-200 text-[50px]">
            درباره ما
          </span>
          {/* <span
            className="font-bold text-[#023275] text-[40px]">
            توضیحاتی بر اهداف والای ما
          </span> */}
        </div>

        <img
          className="w-[2000px] h-[600px] object-cover mr-20 rounded-[30px]"
          src={data[25].image}
          alt=""
        ></img>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AboutUs;
