import React from "react";
import Navbar from "./Navbar";
import { data } from "../data/data";
import { Accordion } from "@material-tailwind/react";
import Acordion from "./Acordion";

const IdeaDetail = () => {
  return (
    <div className="  w-full">
      <Navbar />
      <div className="max-w-[1400px] mx-auto">
          <div className="pt-[50px] flex justify-center">
          <img
              className=" w-[70%] h-[489px] rounded-lg mt-10 "
              alt="ProblemImage"
              src={data[15].image}
            />
          </div>
        <div className="pt-[50px] flex justify-center">
          <div className=" w-[60%] mb-10 pb-10 mt-10 flex flex-col justify-center items-start bg-bg-200/50 shadow-md">
            <div className=" m-12 pt-[10px] flex justify-start items-center gap-7">
              <span className=" text-[30px] text-accent-200 font-bold">
                عنوان:
              </span>
              <div className=" gap-1 flex flex-col justify-center items-center">
                <span className=" text-[30px] text-200 ">
                  اتمام پروژه مصلی امام خمینی تهران{" "}
                </span>
              </div>
            </div>
            <div className=" m-12 flex justify-start items-center gap-7">
              <span className=" text-[30px] text-accent-200 font-bold">
              تخمین پول مورد نیاز    :{" "}
              </span>
              <span className=" text-[30px] text-200 ">100 میلیارد تومن</span>
            </div>
            <div className=" mr-12 mt-12 mb-6 flex justify-start items-center gap-7">
              <span className=" text-[30px] text-accent-200 font-bold">
                شرح مختصر :{" "}
              </span>
            </div>
            <p className=" mr-12 ml-12 text-[30px] text-right text-justify text-200">
            این پروژه سال هاست که در دست کار هست، حال برای تکمیل عملیات های عمرانی نهایی مانند کاشی کاری نیاز به مشارکت و همیاری هست.{" "}
            </p>
          </div>
        </div>
        <div className="py-[50px] flex justify-center">
          <div className=" w-[70%] flex flex-col justify-center items-center mt-10">
            <Acordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaDetail;
