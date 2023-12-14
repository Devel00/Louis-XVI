import React, { useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiEqualizerFill } from "react-icons/ri";

import { BsChat } from "react-icons/bs";
import { PiHandshake } from "react-icons/pi";
import { MdOutlineErrorOutline } from "react-icons/md";
import { PiPlant } from "react-icons/pi";

import {
  MdOutlineManageAccounts,
  MdOutlineFavoriteBorder,
  MdOutlineContactSupport,
} from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import { data } from "../data/data";

const Navbar = () => {
  const User = "";

  // User = localStorage.getItem();

  const [nav, setNav] = useState(false);
  const [account, setAcount] = useState(false);

  return (
    <div className=" max-w-[1640px] bg-bg-200/80 shadow-sm border border-b-2 border-bg-300/10 flex items-center justify-between mx-auto p-5">
      {/* Left Side  */}

      <div className="flex items-center ">
        <div
          onClick={() => setNav(!nav)}
          className=" rotate-180 cursor-pointer"
        >
          {!nav && (
            <TfiMenuAlt
              size={27}
              className=" text-primary-100 hover:trasform hover:rotate-[360deg] hover:duration-[900ms]"
            />
          )}
        </div>
      </div>
      {/* Search Input */}

      <div
        className=" bg-bg-100 font-main font-medium flex items-center  shadow-lg rounded-full
                          "
      >
        <AiOutlineSearch
          size={25}
          className=" cursor-pointer mr-2   text-primary-100"
        />
        <input
          className=" w-[150px] sm:w-[400px] lg:w-[500px] p-2 text-text-100 placeholder:text-text-200/40 placeholder:font-main rounded-full bg-bg-100 focus:outline-none"
          type="search"
          placeholder="جستجو ..."
        ></input>
        <div
          className="group border-bg-300/30 hover:transform hover:duration-[500ms] 
        hover:bg-primary-200 hover:text-bg-200 border shadow-md rounded-r-lg bg-bg-100 h-[40px] w-[44px] text-center items-center justify-center flex rounded-full"
        >
          <RiEqualizerFill
            size={25}
            className="text-primary-100 group-hover:text-bg-200 group-hover:duration-[500ms]  group-hover:cursor-pointer"
          />
        </div>
      </div>
      {/* {exit or signup_login} */}

      {!User ? (
        <div className=" shadow-sm group hover:cursor-pointer bg-bg-100/50 hover:text-bg-100  hover:bg-primary-200 hover:transform hover:translate-x-2  hover:origin-left hover:duration-700  py-2 px-4 rounded-[8px] flex text-center justify-center items-center gap-1 group-hover:font-bold">
          <Link to="/Login">
            <span className=" group-hover:cursor-pointer   font-thin">
              ورود|ثبت نام
            </span>
          </Link>
        </div>
      ) : (
        <div className="group hover:bg-bg-300/40 hover:rounded-[8px] hover:cursor-pointer p-2">
          <div class="relative w-10 h-10 overflow-hidden bg-bg-300 rounded-full dark:bg-gray-600">
            <svg
              class="absolute w-12 h-12 text-bg-100 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div className=" group ">
            <span
              className="transition-all duration-100 invisible group-hover:visible  left-14   absolute  origin-left w-auto p-2 m-2 min-w-max  rounded-md shadow-md
        text-[#ffffff] bg-[#23272a] 
         text-[10px] font-main "
            >
              {data[0].id}
            </span>
          </div>
        </div>
      )}

      {/* Overlay */}
      {nav ? (
        <div className=" bg-bg-300 w-full h-screen z-10 top-0 right-0 fixed"></div>
      ) : (
        ""
      )}

      {/* Side Drawer Menu */}
      <div
        className={
          nav
            ? "z-10 fixed top-0 right-0 w-[200px] h-screen bg-bg-100 duration-400"
            : "z-10 fixed top-0 left-[-100%] w-[200px] h-screen bg-white duration-400"
        }
      >
        <div className="p-4">
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={25}
            className=" right-4 top-4  absolute cursor-pointer text-primary-100"
          />
          <img
            src="../data/Images/29722995_3-removebg-preview.jpg"
            alt=""
            className=" bg-text-100"
          ></img>
        </div>

        <nav className=" container">
          <ul className="felx flex-col py-8 px-6 pt-10 gap-4 text-text-200 hover:text-text-100 ">
            <Link to="/Profile">
              <li className="py-4 px-2  rounded-full  cursor-pointer hover:bg-bg-300/30 flex text-[16px]  justify-start items-center gap-2">
                <MdOutlineManageAccounts size={25} className="" />
                پروفایل شما
              </li>
            </Link>
            <Link to="/Problem">
              <li className="py-4 px-2 rounded-full cursor-pointer  hover:bg-bg-300/30 flex text-[16px] justify-start items-center gap-2">
                <MdOutlineErrorOutline size={25} />
                مشکلات
              </li>
            </Link>

            <li className="py-4 px-2 rounded-full cursor-pointer  hover:bg-bg-300/30 flex text-[16px] justify-start  items-center gap-2">
              <PiHandshake size={25} />
              هم مسیر
            </li>
            <Link to="/IdeaCategory">
            <li className="py-4 px-2 rounded-full cursor-pointer  hover:bg-bg-300/30 flex text-[16px] justify-start items-center gap-2">
              <PiPlant size={25} />
              ایده
            </li>
            </Link>
            <li className="py-4 px-2  rounded-full cursor-pointer  hover:bg-bg-300/30 flex text-[16px] justify-start   items-center gap-2">
              <MdOutlineContactSupport size={22} />
              درباره ما
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
