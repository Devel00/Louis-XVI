import React, { useState } from "react";
import { data } from "../../data/data";

const MainCarousel = () => {
  const [current, setCurrent] = useState(data[2].image);

  return (
    <div className=" scale-95 w-full flex justify-center items-center mx-auto p-4">
      <div className="max-h-[650px] w-full flex justify-center relative ">
        {/*Overlay */}
        <div
          className=" absolute w-[80%] h-full max-h-[800px] rounded-[30px]
           bg-text-100/25 flex flex-col justify-center mr-20"
        >
          <span
            className=" text-[50px] text-primary-300
           font-medium"
          >
            تو هم دوست داری مشکلاتی که
          </span>
          <span
            className=" text-[50px] text-primary-300
           font-medium"
          >
            میبینی رو با بقیه به اشتراک بذاری!
          </span>
        </div>

        <img
          className="w-[80%] max-h-[800px] object-cover mr-20 rounded-[30px]"
          src={current}
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default MainCarousel;
