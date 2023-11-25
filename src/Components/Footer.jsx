import React from "react";
import { data } from "../data/data";

const Footer = () => {
  return (
    <div className=" w-full h-max-[500px] bg-bg200 flex items-start justify-center">
      <img
        className=" w-[80%] absolute left-[10%] top-[30%] mx-0 my-auto"
        src={data[1].image}
        alt=""
      ></img>
    </div>
  );
};

export default Footer;
