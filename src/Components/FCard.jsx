import React, { useState } from "react";
import { data } from "../data/data";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { Link } from "react-router-dom";

const FCard = ({ detail }) => {
  const [Detail, setDetail] = useState(detail);
  const [like, setLike] = useState(0)
  const HandelLike = async () => {


  }
  return (
    <Link to={detail.id ? `/ProblemDetail/${detail.id}` : `/`}>
      <div className="w-[85%] h-[450px] bg-bg-200 hover:bg-bg-300/70 rounded-[24px] shadow-xl flex flex-col  justify-center items-center">
        <img
          className="w-[100%] object-cover h-[70%] object-center rounded-ss-[24px] rounded-se-[24px]"
          src={`https://biglybigly.iran.liara.run/${Detail.main_image}`}
          alt="library"
        />
        <div className="px-6 py-4">
          <div className=" font-main font-bold mb-2">{Detail.title}</div>
          <div className="flex justify-between mt-5 gap-5" >
            <div onClick={HandelLike} className=" bg-bg-100 p-2 gap-5 rounded-lg  flex  items-center justify-between">
              <span className="font-main font-bold">{like}</span>
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

export default FCard;
