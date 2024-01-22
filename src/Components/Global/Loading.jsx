import React from "react";
import { data } from "../../data/data";

const Loading = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img
                className=" animate-spin  animate-infinite animate-duration-[2500ms] py-[15%] "
                src={data[1].image}
                alt=""
            ></img>
        </div>
    );
};

export default Loading;
