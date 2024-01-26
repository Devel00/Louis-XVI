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
        <Link to={detail.id ? `/ProblemDetail/${detail.id}` : `/`}>
            <div
                className={`w-[100%] bg-bg-200 hover:bg-bg-300/70 rounded-[24px] shadow-xl flex flex-row justify-between items-center`}>
                <div className=" mx-10 my-3 font-main font-bold ">{Detail.problem}</div>
                <div className=" mx-10 my-3 font-main font-bold ">{Detail.amount}</div>
            </div>
        </Link>
    );
};

export default FundCardW;
