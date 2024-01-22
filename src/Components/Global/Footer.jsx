import React from "react";
import { data } from "../../data/data";
import { FaTelegram } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className=" w-full mt-20 bottom-0 h-[300px] bg-bg-200/90 shadow-[5px_3px_40px_-15px_rgba(0,0,0,0.3)] flex items-center justify-center">
      <img
        className=" mr-8 w-[160px] h-[160px] ml-2 "
        src={data[1].image}
        alt=""
      ></img>
      <div className=" flex  px-20">
        <div className=" mr-20 pb-5 flex flex-col justify-center items-center px-6">
          <span className=" font-bold text-[26px] mb-4 ">پشتیبانی</span>
          <span className=" font-main text-[16px] px-3">
            اگه مشکلی پیش اومده ,
          </span>
          <span className=" font-main text-[16px] px-3 ">
            نذار توی دلت بمونه با ما مطرح کن
          </span>
        </div>
        <div className=" flex flex-col justify-center items-center px-6">
          <span className=" font-bold text-[26px] mb-4 ">درباره ما</span>
          <span className=" font-main text-[16px] px-3 ">
            اگه دوست داری که بدونی ما
          </span>
          <span className=" font-main text-[16px] px-3 ">
            کی هستیم و چی شد که این
          </span>
          <span className=" font-main text-[16px] px-3 ">
            جا رو ساختیم ،بیا این جا
          </span>
        </div>
        <div className=" flex flex-col justify-center items-center px-6">
          <span className=" font-bold text-[26px] mb-4 ">ارتباط با ما</span>
          <span className=" font-main text-[16px] px-3 ">
            اگه ایده ای یا نظری داری، ما
          </span>
          <span className=" font-main text-[16px] px-3 ">همه جا هستیم،</span>
          <span className=" font-main text-[16px] px-3 ">
            فقط کافیه بزنی روی لینک
          </span>
        </div>
      </div>
      <div className=" flex  gap-5 justify-center items-center ">
        <div className=" bg-bg-100 p-2 rounded-full shadow-md hover:cursor-pointer hover:scale-105">
          <FaTelegram size={25} className=" text-primary-100 " />
        </div>
        <div className=" bg-bg-100 p-2 rounded-full shadow-md hover:cursor-pointer hover:scale-105">
          <BsInstagram size={25} className=" text-[#C13584]" />
        </div>
        <div className=" bg-bg-100 p-2 rounded-full shadow-md hover:cursor-pointer hover:scale-105">
          <AiOutlineYoutube size={28} className=" text-[#CD201e]" />
        </div>
        <div className=" bg-bg-100 p-2 rounded-full shadow-md hover:cursor-pointer hover:scale-105">
          <RiTwitterXLine size={22} className="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
