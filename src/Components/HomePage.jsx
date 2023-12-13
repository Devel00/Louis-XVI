import React, { useState, createContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { data } from "../data/data";
import { Link } from "react-router-dom";
import { HiOutlinePlus } from "react-icons/hi2";
import AddPopup from "./AddPopup";
const MyContext = createContext();

const HomePage = () => {
  const [popup, setPopup] = useState(false);

  return (
    <MyContext.Provider value={[popup, setPopup]}>
      <div className="">
        {popup && <AddPopup />}
        <div
          onClick={() => setPopup(true)}
          className=" hover:scale-110 fixed left-10 hover:cursor-pointer bottom-10"
        >
          <HiOutlinePlus
            className=" p-1 rounded-full w-[50px] h-[50px] bg-bg-100 shadow-xl text-primary-100"
            size={25}
          />
        </div>
        <Navbar />
        <div className=" scale-90  flex flex-col justify-center items-center">
          {/* item1 */}
          <div className=" bg-bg-200 shadow-md hover:border hover:border-bg-300/60  hover:cursor-pointer  flex flex-col justify-center items-center">
            <div className="">
              <div className="absolute bg-text-100/20 z-30 w-[850px] h-[450px] flex justify-center items-center"></div>
              <img
                src={data[7].image}
                alt=""
                className=" z-10 w-[850px] h-[450px]"
              ></img>
            </div>
            <div className=" mt-6 flex flex-col justify-center items-center">
              <span className=" text-[28px] text-accent-200 font-bold">
                محل تحقق ایده ها
              </span>
              <div className=" flex justify-center items-start flex-col">
                <span className="text-[18px] mt-10 mx-14 text-accent-200 font-bold ">
                  هر ایده ای که به نظرت می رسه رو نذار از دست بره!
                </span>
                <span className="text-[18px] mt-2  mx-14 text-accent-200 font-bold ">
                  بیا اینجا مطرح کن نظرات رو جلب ایده ات کن{" "}
                </span>
                <span className="text-[18px] mt-2 mb-10 mx-14 text-accent-200 font-bold ">
                  یار جمع کن و شروع کن به تغییر دادن اوضاع!
                </span>
              </div>
              <Link to="/Problem">
                <button className="font-bold py-3 px-20 mb-6 rounded-[8px] hover:scale-105 hover:duration-[900ms] bg-accent-100 text-bg-100">
                  ورود به صفحه مشکلات
                </button>
              </Link>
            </div>
          </div>
          {/* item2 */}
          <div className=" bg-bg-200 shadow-md flex hover:border hover:border-bg-300/60  hover:cursor-pointer flex-col mt-14  justify-center items-center">
            <div className="">
              <div className="absolute bg-text-100/20 z-30 w-[850px] h-[450px] flex justify-center items-center"></div>
              <img
                src={data[8].image}
                alt=""
                className=" z-10 w-[850px] h-[450px]"
              ></img>
            </div>
            <div className=" mt-6 flex flex-col justify-center items-center">
              <span className=" text-[28px] text-accent-200 font-bold">
                محل پیدا کردن یه هم مسیر{" "}
              </span>
              <div className=" flex justify-center items-start flex-col">
                <span className="text-[18px] mt-10 mx-14 text-accent-200 font-bold ">
                  تنهایی نمی شه انجامش داد....؟{" "}
                </span>
                <span className="text-[18px] mt-2  mx-14 text-accent-200 font-bold ">
                  خب بیا اینجا،{" "}
                </span>
                <span className="text-[18px] mt-2 mb-10 mx-14 text-accent-200 font-bold ">
                  حتما دوستای خوبی رو می تونی پیداکنی{" "}
                </span>
              </div>
              <Link to="/">
                <button className="font-bold py-3 px-20 mb-6 rounded-[8px] hover:scale-105 hover:duration-[900ms] bg-accent-100 text-bg-100">
                  ورود به صفحه هم مسیر{" "}
                </button>
              </Link>
            </div>
          </div>
          {/* item3 */}
          <div className=" bg-bg-200 shadow-md hover:border hover:border-bg-300/60  hover:cursor-pointer flex flex-col mt-14  justify-center items-center">
            <div className="">
              <div className="absolute bg-text-100/20 z-30 w-[850px] h-[450px] flex justify-center items-center"></div>
              <img
                src={data[6].image}
                alt=""
                className=" z-10 w-[850px] h-[450px]"
              ></img>
            </div>
            <div className=" mt-6 flex flex-col justify-center items-center">
              <span className=" text-[28px] text-accent-200 font-bold">
                محل جذب سرمایه{" "}
              </span>
              <div className=" flex justify-center items-start flex-col">
                <span className="text-[18px] mt-10 mx-14 text-accent-200 font-bold ">
                  در این جا می تونی ایده ات رو با جزئیات مطرح کنی{" "}
                </span>
                <span className="text-[18px] mt-2  mx-14 text-accent-200 font-bold ">
                  و سبب بشی ایده ات دیده بشه{" "}
                </span>
                <span className="text-[18px] mt-2 mb-10 mx-14 text-accent-200 font-bold ">
                  و روش سرمایه گذاری انجام بشه{" "}
                </span>
              </div>
              <Link to="/">
                <button className=" py-3 px-16 mb-6 font-bold rounded-[8px] hover:scale-105 hover:duration-[900ms] bg-accent-100 text-bg-100">
                  ورود به صفحه جذب سرمایه{" "}
                </button>
              </Link>
            </div>
          </div>
          {/* end */}
          <Link to="/login">
            <button className="bg-accent-100 text-bg-100 hover:scale-105 hover:duration-[800ms] w-[500px] text-[20px] rounded-[8px] font-bold mt-16 py-4  px-4">
              ورود | ثبت نام
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    </MyContext.Provider>
  );
};

export { MyContext, HomePage };
