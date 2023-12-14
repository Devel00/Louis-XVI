import React, { useState, createContext } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { data } from "../data/data";
import Footer from "./Footer";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { HiOutlinePlus } from "react-icons/hi2";
import Increase from "./Increase";
// import { InfoContext } from "./Login";

const MyContext = createContext();
const Profile = () => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("Info"))
  );
  const [showModal, setShowModal] = useState(false);

  return (
    <MyContext.Provider value={[showModal, setShowModal]}>
      <div className=" w-full ">
        {showModal && <Increase />}
        <div>
          <div className=" bg-bg-200 w-full h-[10%] ">
            <div className="flex flex-col justify-center items-center">
              <img
                className="py-2 left-[48%] w-[70px] h-[85px] "
                src={data[1].image}
                alt=""
              ></img>
            </div>
            <Link to="/">
              <div className=" hover:scale-105 absolute left-8 top-[3%] text-primary-100 ">
                <IoHomeOutline
                  className=" hover:scale-105  hover:duration-[900ms]"
                  size={30}
                />
              </div>
            </Link>
          </div>
          <div className=" scale-90 felx justify-center item-center gap-10 flex-col">
            <div className=" flex flex-col justify-center items-center  ">
              <div className="relative w-[108px] h-[100px] overflow-hidden bg-bg-200 rounded-full dark:bg-gray-600 m-4">
                <svg
                  className="absolute w-[115px] h-[112px] text-accent-100 -left-1 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <span className=" text-accent-200 font-normal text-[22px]">
                  {userInfo.first_name + " " + userInfo.last_name}{" "}
                </span>
              </div>
            </div>
            <div className=" flex justify-center items-center mt-6">
              <div className=" bg-bg-200 h-[1.5px] w-[80%] " />
            </div>
            <div className=" flex justify-start items-center">
              <div className=" bg-bg-200 w-[30%] m-10  shadow-[0_10px_50px_-35px_rgba(0,0,0.3)] flex justify-start items-center flex-col ">
                {/* مشکلات */}
                <div className=" mt-10 w-[100%] mb-5 flex-col justify-center items-center">
                  <div className=" flex justify-start mr-5 sm:gap-4 gap-2 mb-8 items-center w-[100%]">
                    <span className=" text-primary-100 sm:text-[16px] text-[14px]">
                      مشکلات
                    </span>
                    <div className=" bg-primary-100 sm:w-[75%] w-[25%] h-[1.5px]"></div>
                  </div>
                  {/* مدیریت کارت های مشکل */}
                  <Link to="/Manager">
                    <div className=" bg-bg-100 w-[80%] group hover:bg-accent-100  sm:mr-12 mr-4 mb-10 mt-6 px-5 py-3 rounded-[8px] shadow-md">
                      <div className=" flex justify-between items-center ">
                        <span className=" text-accent-200 sm:text-[16px] text-[10px] group-hover:text-bg-100 font-bold">
                          مدیریت کارت های مشکل
                        </span>
                        <IoIosArrowBack
                          className=" group-hover:text-bg-100 text-accent-200"
                          size={25}
                        />
                      </div>
                    </div>
                  </Link>
                  {/* مدیریت مشارکت های من */}
                  <Link to="/Problem">
                    <div className=" bg-bg-100 w-[80%] sm:mr-12 mr-4  group hover:bg-accent-100  mt-6 px-5 py-3 rounded-[8px] shadow-md">
                      <div className=" flex justify-between items-center ">
                        <span className=" group-hover:text-bg-100 sm:text-[16px] text-[10px] text-accent-200 font-bold">
                          مدیریت مشارکت های من
                        </span>
                        <IoIosArrowBack
                          className=" group-hover:text-bg-100 text-accent-200"
                          size={25}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                {/* پایان مشکلات */}
                {/* ایده */}
                <div className="  w-[100%] mt-10 mb-5 flex-col justify-center items-center">
                  <div className=" flex justify-start mr-6 sm:gap-9 gap-2 mb-10 items-center w-[100%]">
                    <span className=" text-primary-100 sm:text-[16px] text-[14px]">
                      ایده
                    </span>
                    <div className=" bg-primary-100 sm:w-[75%] w-[25%] h-[1.5px]"></div>
                  </div>
                  {/* مدیریت کارت های ایده */}
                  <Link to="/Problem">
                    <div className=" bg-bg-100 w-[80%] group hover:bg-accent-100 sm:mr-12 mr-4  mb-10 mt-6 px-5 py-3 rounded-[8px] shadow-md">
                      <div className=" flex justify-between items-center ">
                        <span className=" group-hover:text-bg-100 sm:text-[16px] text-[10px] text-accent-200 font-bold">
                          مدیریت کارت های ایده
                        </span>
                        <IoIosArrowBack
                          className=" group-hover:text-bg-100 text-accent-200"
                          size={25}
                        />
                      </div>
                    </div>
                  </Link>
                  {/* مدیریت سرمایه گذاری ها */}

                  <div
                    onClick={() => setShowModal(true)}
                    className=" bg-bg-100 w-[80%] group hover:bg-accent-100 sm:mr-12 mr-4   mt-6 px-5 py-3 rounded-[8px] shadow-md"
                  >
                    <div className=" flex justify-between items-center ">
                      <span className=" group-hover:text-bg-100 sm:text-[16px] text-[10px] text-accent-200 font-bold">
                        افزایش موجودی{" "}
                      </span>
                      <IoIosArrowBack
                        className=" group-hover:text-bg-100 text-accent-200"
                        size={25}
                      />
                    </div>
                  </div>
                </div>
                {/* پایان ایده */}
                {/* هم پا */}
                <div className="  w-[100%] mt-10 mb-5 flex-col justify-center items-center">
                  <div className=" flex justify-start mr-6 sm:gap-7 gap-2 mb-10 items-center w-[100%]">
                    <span className=" text-primary-100 sm:text-[16px] text-[12px]">
                      هم پا
                    </span>
                    <div className=" bg-primary-100 sm:w-[75%] w-[25%] h-[1.5px]"></div>
                  </div>
                  {/*مدیریت کارت های هم پا*/}
                  <Link to="/Problem">
                    <div className=" bg-bg-100 w-[80%] group hover:bg-accent-100 sm:mr-12 mr-4  mb-10 mt-6 px-5 py-3 rounded-[8px] shadow-md">
                      <div className=" flex justify-between items-center ">
                        <span className=" group-hover:text-bg-100 sm:text-[16px] text-[10px] text-accent-200 font-bold">
                          مدیریت کارت های هم پا
                        </span>
                        <IoIosArrowBack
                          className=" group-hover:text-bg-100 text-accent-200"
                          size={25}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                {/* پایان هم پا */}
                {/*ویرایش اطلاعات */}
                <div className="  w-[100%] mt-1 mb-5 flex-col justify-center items-center">
                  <div className=" flex justify-start mr-5 sm:gap-4 gap-2 mb-10 items-center w-[100%]">
                    <span className=" text-primary-100 sm:text-[16px] text-[14px] ">
                      تنطیمات
                    </span>
                    <div className=" bg-primary-100 sm:w-[75%] w-[25%] h-[1.5px]"></div>
                  </div>
                  {/*ویرایش اطلاعات*/}
                  <Link to="/Problem">
                    <div className=" bg-bg-100 w-[80%] group hover:bg-accent-100 sm:mr-12 mr-4  mb-10 mt-6 px-5 py-3 rounded-[8px] shadow-md">
                      <div className=" flex justify-between items-center ">
                        <span className=" group-hover:text-bg-100 sm:text-[16px] text-[10px] text-accent-200 font-bold">
                          ویرایش اطلاعات
                        </span>
                        <IoIosArrowBack
                          className=" group-hover:text-bg-100 text-accent-200"
                          size={25}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                {/*  پایان ویرایش اطلاعات */}
              </div>
              <div className=" bg-bg-200 w-[60%] mt-10 m-2 h-[1020px] shadow-[0_10px_50px_-35px_rgba(0,0,0.3)] ">
                <div className=" grid sm:grid-cols-2 grid-cols-1 w-[100%]">
                  {/* item1 */}
                  <div className=" bg-bg-100 shadow-md  rounded-[8px]  mt-16 sm:mr-16 mr-6 w-[80%] gap-4 flex flex-col justify-center items-center">
                    <div className=" bg-bg-200 text-[18px] font-bold p-2 px-5 shadow-md flex justify-center items-center mt-2 text-accent-100 rounded-full ">
                      <span className=" text-[22px]">5+</span>
                    </div>
                    <span className=" text-[18px] font-bold mb-2 text-accent-100">
                      کارت های مشکل من
                    </span>
                  </div>
                  {/* item2 */}
                  <div className=" bg-bg-100 shadow-md  rounded-[8px]  mt-16 mr-6 w-[80%] gap-4 flex flex-col justify-center items-center">
                    <div className=" bg-bg-200 text-[18px] font-bold p-2 px-5 shadow-md flex justify-center items-center mt-2 text-accent-100 rounded-full ">
                      <span className=" text-[22px]">5+</span>
                    </div>
                    <span className=" text-[18px] font-bold mb-2 text-accent-100">
                      مشارکت های من
                    </span>
                  </div>
                  {/* item3 */}
                  <div className=" bg-bg-100 shadow-md   rounded-[8px]  mt-16 sm:mr-16 mr-6 w-[80%] gap-4 flex flex-col justify-center items-center">
                    <div className=" bg-bg-200 text-[18px] font-bold p-2 px-5 shadow-md flex justify-center items-center mt-2 text-accent-100 rounded-full ">
                      <span className=" text-[22px]">5+</span>
                    </div>
                    <span className=" text-[18px] font-bold mb-2 text-accent-100">
                      کارت های ایده من
                    </span>
                  </div>
                  {/* item4 */}
                  <div className=" bg-bg-100 shadow-md  rounded-[8px]  mt-16 mr-6 w-[80%] gap-4 flex flex-col justify-center items-center">
                    <div className=" bg-bg-200 text-[18px] font-bold p-2 px-5 shadow-md flex justify-center items-center mt-2 text-accent-100 rounded-full ">
                      <span className=" text-[22px]">{userInfo.balance}</span>
                    </div>
                    <span className=" text-[18px] font-bold mb-2 text-accent-100">
                      موجودی
                    </span>
                  </div>
                </div>
                <div className="">
                  {/* add Problem */}
                  <Link to="/">
                    <div className=" bg-bg-100 group hover:bg-accent-100 shadow-md  rounded-[8px]  mt-16 sm:mr-16 mr-6 w-[86%] gap-6 flex flex-col justify-center items-center">
                      <div className="  text-[18px] font-bold p-4 px-4 shadow-md flex justify-center items-center mt-2 text-accent-100 rounded-full ">
                        <span className=" text-[22px]">
                          <HiOutlinePlus
                            className="group-hover:text-bg-100 "
                            size={30}
                          />
                        </span>
                      </div>
                      <span className=" text-[18px] group-hover:text-bg-100 font-bold mb-2 text-accent-100">
                        اضافه کردن کارت مشکل
                      </span>
                    </div>
                  </Link>
                  {/* add idea */}
                  <Link to="/">
                    <div className=" bg-bg-100 group hover:bg-accent-100 shadow-md  rounded-[8px]  mt-16 sm:mr-16 mr-6 w-[86%] gap-6 flex flex-col justify-center items-center">
                      <div className="  text-[18px] font-bold p-4 px-4 shadow-md flex justify-center items-center mt-2 text-accent-100 rounded-full ">
                        <span className=" text-[22px]">
                          <HiOutlinePlus
                            className="group-hover:text-bg-100 "
                            size={30}
                          />
                        </span>
                      </div>
                      <span className=" text-[18px] group-hover:text-bg-100 font-bold mb-2 text-accent-100">
                        اضافه کردن کارت ایده
                      </span>
                    </div>
                  </Link>
                  {/* add foot */}
                  <Link to="/">
                    <div className=" bg-bg-100 group hover:bg-accent-100 shadow-md  rounded-[8px]  mt-16 sm:mr-16 mr-6 sm:w-[86%] gap-6 flex flex-col justify-center items-center">
                      <div className="  text-[18px] font-bold p-4 px-4 shadow-md flex justify-center items-center mt-2 text-accent-100 rounded-full ">
                        <span className=" text-[22px]">
                          <HiOutlinePlus
                            className="group-hover:text-bg-100 "
                            size={30}
                          />
                        </span>
                      </div>
                      <span className=" text-[18px] group-hover:text-bg-100 font-bold mb-2 text-accent-100">
                        اضافه کردن کارت هم پا
                      </span>
                    </div>
                  </Link>
                  {/* end of adds*/}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      )
    </MyContext.Provider>
  );
};

export { MyContext, Profile };
