import React, { useState } from "react";
import { data } from "../data/data";

const Carousel = () => {
  const [current, setCurrent] = useState(data[2].image);

  return (
    <div className=" w-full flex justify-center items-center mx-auto p-4">
      <div className="max-h-[500px] w-full flex justify-center relative">
        {/*Overlay */}
        <div
          className=" absolute w-[70%] h-full max-h-[500px]
           bg-text-100/25 flex flex-col justify-center mr-20"
        >
          <span
            className=" text-[24px] text-primary-300
           font-medium"
          >
            تو هم دوست داری مشکلاتی که
          </span>
          <span
            className=" text-[24px] text-primary-300
           font-medium"
          >
            میبینی رو با بقیه به اشتراک بذاری!
          </span>
        </div>

        <img
          className="w-[70%]  max-h-[300px] object-cover mr-20"
          src={current}
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default Carousel;
