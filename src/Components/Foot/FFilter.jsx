import React from "react";
import { data } from "../../data/data";
import { Link } from "react-router-dom";

const Filter = () => {
    return (
        <div className=" scale-90">
            <div className=" flex justify-center items-center">
                <div className=" border-b-2 border-bg-300/30 w-[90%]"></div>
            </div>
            <div className="  grid grid-cols-1  lg:grid-cols-2 gap-2 px-2 pt-4">
                <div className=" hover:cursor-pointer w-full flex justify-center  items-center mx-auto p-2">
                    <div className="max-h-[500px] w-full flex justify-center relative">
                        <Link to={`/FootCat/4`}>
                            <div
                                className=" absolute w-[100%] h-full max-h-[500px]
            bg-text-100/40 hover:bg-text-100/10 rounded-[10px] flex flex-col items-center justify-center "
                            >
                                <span className=" text-primary-300 text-[40px]">تفریح</span>
                            </div>
                        </Link>
                        <img
                            className="w-[100%] rounded-[10px]  max-h-[300px] object-cover "
                            src={data[17].image}
                            alt=""
                        ></img>
                    </div>
                </div>
                <div className="  hover:cursor-pointer w-full flex justify-center items-center mx-auto p-2">
                    <div className="max-h-[500px] w-full flex justify-center relative">
                        <Link to={`/FootCat/2`}>
                            <div
                                className=" absolute w-[100%] hover:bg-text-100/10 h-full max-h-[500px]
            bg-text-100/40 rounded-[10px] flex flex-col justify-center "
                            >
                                <span className=" text-primary-300 text-[40px]">زبان</span>
                            </div>
                        </Link>
                        <img
                            className="w-[100%] rounded-[10px]  max-h-[300px] object-cover "
                            src={data[19].image}
                            alt=""
                        ></img>
                    </div>
                </div>
                <div className="  hover:cursor-pointer w-full flex justify-center items-center mx-auto p-2">
                    <div className="max-h-[500px] w-full flex justify-center relative">
                        <Link to={`/FootCat/3`}>
                            <div
                                className=" absolute hover:bg-text-100/10 w-[100%] h-full max-h-[500px]
            bg-text-100/40 flex rounded-[10px] flex-col justify-center "
                            >
                                <span className=" text-primary-300 text-[40px]">سفر</span>
                            </div>
                        </Link>
                        <img
                            className="w-[100%] rounded-[10px]  max-h-[300px] object-cover "
                            src={data[3].image}
                            alt=""
                        ></img>
                    </div>
                </div>
                <div className=" hover:cursor-pointer  w-full flex justify-center items-center mx-auto p-2">
                    <div className="max-h-[500px] w-full flex justify-center relative">
                        <Link to={`/FootCat/4`}>
                            <div
                                className=" absolute hover:bg-text-100/10 w-[100%] h-full max-h-[500px]
            bg-text-100/40 flex rounded-[10px] flex-col justify-center "
                            >
                                <span className=" text-primary-300 text-[40px]">تفریح</span>
                            </div>
                        </Link>

                        <img
                            className="w-[100%] rounded-[10px] max-h-[300px] object-cover "
                            src={data[17].image}
                            alt=""
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
