import React, { useEffect, useState, createContext } from "react";
import Navbar from "./Navbar";
import { data } from "../../data/data";
import { Link } from "react-router-dom";
import { HiOutlinePlus } from "react-icons/hi2";
import AddPopup from "./AddPopup";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTelegram } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";

const MyContext = createContext();

const HomePage = () => {
  const [user, setuser] = useState(localStorage.getItem("ID"));
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1200 }); //animation on scroll
  });

  return (
    <MyContext.Provider value={[showModal, setShowModal]}>
      <div className="">
        {showModal && <AddPopup />}

        <Navbar data-aos="fade-down" />
        <div className=" flex flex-col justify-center items-center">
          {/* item1 */}

          <div className=" w-[100%] bg-[#7aceff22] py-10 ">
            <div className="py-[40px]">
              <span className=" text-accent-200 font-bold text-[45px]">
                به همپا خییییییلی خوش اومدی
              </span>
            </div>
            <div
              className=" pt-[30px] pb-[50px] scale-90 flex flex-row mt-14  justify-center items-center"
              data-aos="fade-left"
              data-aos-anchor-placement="top-center"
            >
              <div className=" w-[30%] mt-6 flex flex-col justify-center items-center">
                <span className="ml-[65px] text-[28px] text-accent-200 font-bold">
                  محل تحقق ایده ها
                </span>
                <div className=" flex justify-right items-start flex-col">
                  <span className="text-[18px] mt-10 mr-20 text-accent-200 font-bold ">
                    هر ایده ای که به نظرت می رسه رو نذار از دست بره!
                  </span>
                  <span className="text-[18px] mr-20 mt-2 text-accent-200 font-bold ">
                    بیا اینجا مطرح کن نظرات رو جلب ایده ات کن{" "}
                  </span>
                  <span className="text-[18px] mr-20 mt-2 mb-10 text-accent-200 font-bold ">
                    یار جمع کن و شروع کن به تغییر دادن اوضاع!
                  </span>
                </div>

                <Link to="/Problem">
                  <button className="font-bold py-3 px-20 mb-6 mr-[30px] rounded-[8px] hover:scale-105 hover:duration-[900ms] bg-accent-100 text-bg-100">
                    ورود به صفحه مشکلات
                  </button>
                </Link>
              </div>
              <div className="mr-[100px]">
                <div className=" flex justify-center items-center"></div>
                <img
                  src={data[28].image}
                  alt=""
                  className=" w-[850px] h-[450px] rounded-[20px]"
                ></img>
              </div>
            </div>
          </div>

          {/* item2 */}
          <div className="overflow-hidden w-[100%] bg-[#fee6e655] py-[70px] shadow-[5px_3px_40px_-15px_rgba(0,0,0,0.3)]  ">
            <div
              className=" py-[30px] scale-90 flex flex-row mt-14  justify-center items-center"
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
            >
              <div className="ml-[100px]">
                <div className=" flex justify-center items-center"></div>
                <img
                  src={data[26].image}
                  alt=""
                  className=" w-[800px] h-[450px] rounded-[20px]"
                ></img>
              </div>
              <div className=" w-[30%] mt-6 flex flex-col justify-center items-center">
                <span className=" text-[28px] text-accent-200 font-bold">
                  محل پیدا کردن یه هم مسیر{" "}
                </span>
                <div className=" flex justify-center items-start flex-col">
                  <span className="text-[18px] mt-10 mr-20 text-accent-200 font-bold ">
                    تنهایی نمی شه انجامش داد....؟{" "}
                  </span>
                  <span className="text-[18px] mr-20 mt-2 mb-10 text-accent-200 font-bold ">
                    خب بیا اینجا!!! حتما دوستای خوبی رو می تونی پیدا کنی{" "}
                  </span>
                </div>

                <Link to="/Feet">
                  <button className="font-bold py-3 px-20 mb-6 rounded-[8px] hover:scale-105 hover:duration-[900ms] bg-accent-100 text-bg-100">
                    ورود به صفحه هم مسیر{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* item3 */}
          <div className=" w-[100%] bg-[#ffca6422] py-10 ">
            <div
              className=" py-[30px] scale-90 flex flex-row mt-14  justify-center items-center"
              data-aos="fade-left"
              data-aos-anchor-placement="top-center"
            >
              <div className=" w-[30%] mt-6 flex flex-col justify-right items-center">
                <span className="ml-[65px] text-[28px] text-accent-200 font-bold ">
                  محل جذب سرمایه{" "}
                </span>
                <div className=" flex justify-center items-start flex-col">
                  <span className="text-[18px] mt-10 mr-20 text-accent-200 font-bold ">
                    در این جا می تونی ایده ات رو با جزئیات مطرح کنی{" "}
                  </span>
                  <span className="text-[18px] mr-20 mt-2 text-accent-200 font-bold ">
                    و سبب بشی ایده ات دیده بشه{" "}
                  </span>
                  <span className="text-[18px] mr-20 mt-2 mb-10 text-accent-200 font-bold ">
                    و روش سرمایه گذاری انجام بشه{" "}
                  </span>
                </div>

                <Link to="/IdeaCategory">
                  <button className="font-bold py-3 px-20 mb-6 mr-[55px] rounded-[8px] hover:scale-105 hover:duration-[900ms] bg-accent-100 text-bg-100">
                    ورود به صفحه جذب سرمایه{" "}
                  </button>
                </Link>
              </div>
              <div className="mr-[100px]">
                <div className=" flex justify-center items-center"></div>
                <img
                  src={data[27].image}
                  alt=""
                  className=" scale-140 w-[850px] h-[450px] rounded-[20px]"
                ></img>
              </div>
            </div>
            <div className="pt-[120px] pb-[80px]">
              <span className=" flex flex-col text-accent-200 font-bold text-[28px]">
                از همین حالا می تونی شروع کنی!
              </span>
              {!user ? (
                <Link
                  to="/login"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <button className="bg-accent-100 text-bg-100 hover:scale-105 hover:duration-[800ms] w-[500px] text-[20px] rounded-[8px] font-bold mt-[25px] py-4  px-4">
                    ورود | ثبت نام
                  </button>
                </Link>
              ) : (
                <Link
                  to="/profile"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <button className="bg-accent-100 text-bg-100 hover:scale-105 hover:duration-[800ms] w-[500px] text-[20px] rounded-[8px] font-bold mt-[25px] py-4  px-4">
                    ورود به صفحه پروفایل
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <HiOutlinePlus
          onClick={() => setShowModal(true)}
          className=" animate-bounce fixed left-12 hover:cursor-pointer bottom-10 p-1 rounded-full  bg-bg-100 shadow-md text-primary-100"
          size={100}
        />

        {/* exclusive footer */}
        <div className=" w-full bottom-0 h-[300px] bg-bg-200/90 shadow-[5px_3px_40px_-15px_rgba(0,0,0,0.3)] flex items-center justify-center">
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
              <span className=" font-main text-[16px] px-3 ">
                همه جا هستیم،
              </span>
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
      </div>
    </MyContext.Provider>
  );
};

export { MyContext, HomePage };
