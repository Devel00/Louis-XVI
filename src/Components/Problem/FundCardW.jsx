import React, { useState } from "react";
import { data } from "../../data/data";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { Link } from "react-router-dom";

const FundCardW = ({ detail }) => {
    const [Detail, setDetail] = useState(detail);
    const [like, setLike] = useState(0)
    const HandelLike = async () => {


    }
    return (
        <Link to={Detail.problem ? `/ProblemDetail/${Detail.problem}` : `/`}>
            <div
                className={`w-[100%] bg-bg-200 hover:bg-bg-300/70 rounded-[24px] shadow-xl flex flex-row justify-between items-center`}>
                <div>
                    <div className=" mx-10 my-3 font-main font-bold rounded-lg bg-primary-300 ">{Detail.problem}</div>
                    <div className=" mx-10 my-3 font-main font-bold " >شماره مشکل</div>
                </div>
                <div>
                    <div className=" mx-10 my-3 font-main font-bold rounded-lg bg-primary-200">{Detail.amount}</div>
                    <div className=" mx-10 my-3 font-main font-bold ">میزان کمک </div>
                </div>
            </div>
        </Link>
    );
};

export default FundCardW;
