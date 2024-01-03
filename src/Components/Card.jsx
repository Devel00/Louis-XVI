import React, { useState } from "react";
import { data } from "../data/data";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ detail }) => {
  const [Detail, setDetail] = useState(detail);
  console.log(Detail);
  return (
    <Link to={detail.id ? `/ProblemDetail/${detail.id}` : `/`}>
      <div className="w-[85%] h-[450px] bg-bg-200 hover:bg-bg-300/70 rounded-[24px]  shadow-xl flex flex-col  justify-center items-center">
        <img
          className=" m-2 w-[90%] h-[80%] rounded-[16px]"
          src={`https://biglybigly.iran.liara.run/${Detail.main_image}`}
          alt="library"
        />
        <div className="px-6 py-4">
          <div className=" font-main font-bold mb-2">{Detail.id}</div>
          <div className="flex justify-between mt-5">
            <div className=" bg-bg-100 p-2 gap-3 rounded-lg  flex  items-center justify-between">
              <span className="font-main font-bold">2k</span>
              <AiOutlineLike className=" text-primary-100" size={40} />
            </div>
            <div className=" bg-bg-100 p-2 gap-4 rounded-lg flex justify-between items-center ">
              <span className="font-main font-bold">
                {detail.financial_amount}
              </span>
              <MdOutlineVolunteerActivism
                className=" text-primary-100"
                size={40}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
