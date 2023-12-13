import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { data } from "../data/data";

const Factor = () => {

    const navigate = useNavigate();
    function returnPage(){
        navigate("/Profile");
    }

  return (
    <div className="bg-[#ffffff] flex flex-row justify-center w-full">
      <div className="bg-[#ffffff] overflow-hidden w-[1440px] h-[1024px] relative">
        <div className="absolute w-[1442px] h-[433px] top-0 left-[-14px]">
          <div className="absolute w-[1440px] h-[145px] top-0 left-0">
            <div className="absolute w-[1440px] h-[136px] top-[9px] left-0 bg-bg-200" />
            <img
                className=" absolute top-6 left-[43%] w-[100px] h-[100px]"
                src={data[1].image}
                alt=""
              ></img>
          </div>
          <img
                className=" absolute top-[300px] left-[32%] w-[120px] h-[120px]"
                src={data[9].image}
                alt=""
              ></img>
          <span className="h-[63px] top-[345px] left-[600px] [font-family:'Vazirmatn-Regular',Helvetica] font-normal text-accent-200 text-[40px] absolute text-center tracking-[0] leading-[normal] [direction:rtl]">
            محمد حسین اکبری
          </span>
          <img
                className=" absolute top-[520px] left-[15%] w-[900px] h-[120px]"
                src={data[10].image}
                alt=""
              ></img>        </div>
        <div className="absolute w-[582px] h-[90px] top-[478px] left-[397px]">
          <p className="h-[109px] w-[900px] top-[26px] left-[-160px] [font-family:'Vazirmatn-Black',Helvetica] font-black text-accent-200 text-[40px] absolute text-center tracking-[0] leading-[normal] [direction:rtl]">
            خرید شما با موفقیت انجام شد
          </p>
          <img
                className=" absolute top-[-10px] left-[-21%] w-[120px] h-[120px]"
                src={data[11].image}
                alt=""
              ></img>
        </div>
        <div className="absolute h-[47px] top-[639px] left-[540px] [font-family:'Vazirmatn-Bold',Helvetica] font-bold text-accent-100 text-[30px] text-center tracking-[0] leading-[normal] [direction:rtl]">
          شماره پیگیری : 231313
        </div>
        <div className="absolute w-[525px] h-[81px] top-[778px] left-[470px]">
          <div className="relative w-[588px] h-[81px] left-[-25px]">
            <button onClick={returnPage} className="w-[588px] h-[81px] top-0 left-0 absolute bg-accent-100">
            <span className="h-[47px] top-[25px] left-[256px] [font-family:'Vazirmatn-Medium',Helvetica] text-white text-[30px] absolute text-center tracking-[0] leading-[normal] [direction:rtl]">
              بازگشت
            </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Factor;