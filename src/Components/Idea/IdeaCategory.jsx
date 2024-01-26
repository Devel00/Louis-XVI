import React, { useEffect, useState } from "react";
import {
  AiOutlineCar,
  AiOutlineCustomerService,
  AiOutlineShop,
} from "react-icons/ai";
import Footer from "../Global/Footer";
import { data } from "../../data/data";
import Navbar from "../Global/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const IdeaCategory = () => {
  useEffect(() => {
    AOS.init({duration:1200 })  //animation on scroll
  })
  return (
    <div className="">
      <Navbar/>
      <div className= "scale-90">
        <div className="max-w-[1500px] mx-auto">
          <div className="pt-[30px] pb-[500px] flex justify-center" data-aos="flip-left" data-aos-anchor-placement="bottom-bottom">
            <img
              className="absolute w-[1420px] h-[462px] object-cover rounded-[30px]"
              alt="Absolutvision"
              src={data[12].image}
            />
            <div className="absolute w-[1420px] h-[462px] bg-[#89840a99] rounded-[30px]" />
            <p className="font-bold text-[#ffffff] text-[50px] absolute pt-[190px]">
              تو هم ایده هایی داری و دوست داری عملیش کنی !
            </p>
          </div>
          <div className="" data-aos="fade-down" data-aos-anchor-placement="top-center">
          <div className="font-bold  text-accent-200 text-[42px] pb-[50px]" >
            دسته‌بندی مورد نظرت رو انتخاب کن
          </div>
          <div className="grid scale-90 grid-cols-2  gap-10 mb-[150px]">
            <div className="shadow-lg flex p-5">
              <div>
                <AiOutlineCar className="w-[100px] h-[100px] text-accent-200" />
              </div>
              <div className="text-right mr-10">
                <span className="text-[32px] font-semibold block">طبیعت</span>
                <span className="text-[28px] block text-[#aaaaaa]">
                  ایده های مربوط به طبیعت
                </span>
              </div>
            </div>

            <div className="shadow-lg flex p-5">
              <div>
                <AiOutlineCustomerService className="w-[100px] h-[100px] text-accent-200" />
              </div>
              <div className="text-right mr-10">
                <span className="text-[32px] font-semibold block">تفریحی</span>
                <span className="text-[28px] block text-[#aaaaaa]">
                  ایده های مربوط به تفریحی
                </span>
              </div>
            </div>

            <div className="shadow-lg flex p-5">
              <div>
                <AiOutlineShop className="w-[100px] h-[100px] text-accent-200" />
              </div>
              <div className="text-right mr-10">
                <span className="text-[32px] font-semibold block">آموزشی</span>
                <span className="text-[28px] block text-[#aaaaaa]">
                  ایده های مربوط به آموزشی
                </span>
              </div>
            </div>

            <div className="shadow-lg flex p-5">
              <div>
                <AiOutlineCar className="w-[100px] h-[100px] text-accent-200" />
              </div>
              <div className="text-right mr-10">
                <span className="text-[32px] font-semibold block">طبیعت</span>
                <span className="text-[28px] block text-[#aaaaaa]">
                  ایده های مربوط به طبیعت
                </span>
              </div>
            </div>

            <div className="shadow-lg flex p-5">
              <div>
                <AiOutlineCar className="w-[100px] h-[100px] text-accent-200" />
              </div>
              <div className="text-right mr-10">
                <span className="text-[32px] font-semibold block">طبیعت</span>
                <span className="text-[28px] block text-[#aaaaaa]">
                  ایده های مربوط به طبیعت
                </span>
              </div>
            </div>

            <div className="shadow-lg flex p-5">
              <div>
                <AiOutlineCustomerService className="w-[100px] h-[100px] text-accent-200" />
              </div>
              <div className="text-right mr-10">
                <span className="text-[32px] font-semibold block">تفریحی</span>
                <span className="text-[28px] block text-[#aaaaaa]">
                  ایده های مربوط به تفریحی
                </span>
              </div>
            </div>

            <div className="shadow-lg flex p-5">
              <div>
                <AiOutlineShop className="w-[100px] h-[100px] text-accent-200" />
              </div>
              <div className="text-right mr-10">
                <span className="text-[32px] font-semibold block">آموزشی</span>
                <span className="text-[28px] block text-[#aaaaaa]">
                  ایده های مربوط به آموزشی
                </span>
              </div>
            </div>

            <div className="shadow-lg flex p-5">
              <div>
                <AiOutlineCar className="w-[100px] h-[100px] text-accent-200" />
              </div>
              <div className="text-right mr-10">
                <span className="text-[32px] font-semibold block">طبیعت</span>
                <span className="text-[28px] block text-[#aaaaaa]">
                  ایده های مربوط به طبیعت
                </span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default IdeaCategory;
