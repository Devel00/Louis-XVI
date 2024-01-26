import React,{ useEffect } from "react";
import {
  AiOutlineCar,
  AiOutlineCustomerService,
  AiOutlineShop,
} from "react-icons/ai";
import Footer from "../Global/Footer";
import { data } from "../../data/data";
import Navbar from "../Global/Navbar";
const IdeaCategory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      {/* <<div className="bg-[#eeeeee] pt-8 pb-8">
        <div className="max-w-[1700px] mx-auto flex justify-between items-center">
          <div>
            <img className="w-[50px] h-[50px]" src={data[13].image} />
          </div>
          <div>
            <input
              type="text"
              className="w-[600px] h-[60px] rounded-full shadow-lg"
            ></input>
          </div>
          <div>
            <img className="w-[70px] h-[70px]" src={data[9].image} />
          </div>
        </div>
      </div>> */}
      <Navbar></Navbar>

      <div className=" scale-90">
        <div className="max-w-[1400px] mx-auto">
          <div className="py-[50px] flex justify-center">
            <img
              className="absolute w-[1045px] h-[340px] object-cover"
              alt="Absolutvision"
              src={data[12].image}
            />
            <div className="absolute w-[1047px] h-[346px] bg-[#89840a99]" />
            <p className="font-bold text-[#ffffff] text-[50px] absolute pt-[140px]">
              تو هم ایده هایی داری و دوست داری عملیش کنی !
            </p>
          </div>
          <div className="font-bold  text-accent-200 text-[42px] pt-[400px] pb-[50px]">
            دسته‌بندی مورد نظرت رو انتخاب کن
          </div>
          <div className="grid scale-75 grid-cols-2  gap-10 mb-[250px]">
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
      <Footer />
    </div>
  );
};

export default IdeaCategory;
