import React, { useState } from "react";
import { data } from "../../data/data";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { Link } from "react-router-dom";

const PCard = ({ detail }) => {
    const [Detail, setDetail] = useState(detail);
    const [like, setLike] = useState(0)
    const HandelLike = async () => {


    }
    return (
        <Link to={detail.id ? `/idea/${detail.id}` : `/`}>
            <div
                className={`w-[95%] h-[600px] bg-bg-200 hover:bg-bg-300/70 rounded-[24px] shadow-xl flex flex-col items-center`}>
                <div className="  justify-center grid grid-cols-3 ">
                    <img
                        className="w-[85%] h-[300px] m-6 object-cover object-center  rounded-[24px] shadow-[0px_0px_20px_4px_rgba(0,0,0,0.2)] "
                        src={Detail.image}
                        alt="library"
                    />
                    <video
                        controls
                        className="w-[85%] h-[300px] m-6 object-contain   rounded-[24px] shadow-[0px_0px_20px_4px_rgba(0,0,0,0.2)]  "
                        src={detail.complete_video}></video>
                    <video
                        controls
                        className=" w-[85%] h-[300px] object-contain  m-6 rounded-[24px] shadow-[0px_0px_20px_4px_rgba(0,0,0,0.2)]  "
                        src={detail.cover_video}></video>
                    </div>
                <div className=" w-full px-6 py-4">
                    <div className=" font-main font-bold mb-2 text-[30px]">{Detail.farsi_title}</div>
                    <div className=" font-main  mb-2 text-[28px]">{Detail.english_title}</div>
                    <div className="flex justify-between mt-5 gap-5" >
                    <div className=" w-full justify-between items-center flex flex-row ">
                        <div className=" px-10">
                            <div className="text-[24px] text-accent-200 font-bold">حوزه ایده</div>
                            <div className=" font-bold">{Detail.tech_field}</div>
                        </div>
                        <div >
                            <div className="text-[24px] text-accent-200 font-bold">هزینه کل</div>
                            <div className=" font-bold">{Detail.total_investment}</div>
                        </div>
                        <div>
                            <div className="text-[24px] text-accent-200 font-bold">زمان کل</div>
                            <div className=" font-bold">{Detail.time_to_finish}</div>
                        </div>
                        <div className="px-10">
                            <div className="text-[24px] text-accent-200 font-bold">سرمایه جمع شده</div>
                            <div className=" font-bold">{Detail.total_investment}</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PCard;
