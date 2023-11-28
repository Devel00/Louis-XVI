import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../data/data";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    let login = {
      phone_number: username,
      password: password,
    };

    await fetch("https://biglybigly.iran.liara.run/api/v1/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  return (
    <div className="h-screen bg-white font-main flex flex-col justify-center items-center ">
      <div className="w-[35%] h-screen left-0 top-0 absolute bg-accent-100/80" />
      <div className="w-[55%] h-[65%]  flex flex-col items-center justify-center z-30  bg-bg-100 bg-opacity-0 shadow-[-18px_10px_80px_-5px_rgba(5,5,5,0.3)] shadow-text-200/60">
        <div className="w-[14.5%] flex-col items-end  h-[65%] left-[20.5%] top-[17.5%] absolute bg-accent-100  ">
          <img
            className=" w-[80%] absolute left-[10%] top-[30%] mx-0 my-auto"
            src={data[1].image}
            alt=""
          ></img>
        </div>
        <div className=" pt-4 pb-4">
          <span className=" text-text-100 text-[18px] font-black sm:text-[26px]  ">
            ورود به صفحه کاربری
          </span>
        </div>

        <div className=" px-10 ml-10  pt-4 pb-4 flex flex-col items-start gap-2">
          <label className="font-main ">نام کاربری :</label>
          <input
            dir="ltr"
            className=" w-[80%] sm:w-[400px] font-normal text-[20px] placeholder:text-[15px] rounded-[8px]  px-2 py-2 border border-bg-200 shadow-md "
            type="text"
            placeholder="Username ..."
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>

        <div className=" px-10 ml-12  pt-4 pb-8 flex flex-col items-start gap-2">
          <label className="  font-main ">رمز عبور :</label>
          <input
            dir="ltr"
            className="w-[80%] sm:w-[400px] px-2 font-normal placeholder:text-[15px] rounded-[8px] text-[20px]  py-2 border border-bg-200 shadow-md "
            type="password"
            placeholder="password ..."
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className=" px-10 ml-[50px] group bg-accent-100 w-[59%] sm:w-[400px] pt-3 mt-5 pb-3 flex rounded-[8px] flex-col items-center gap-2">
          <div className="  ">
            <button onClick={handleLogin} className="">
              <span className=" text-[16px] sm:text-[16px]">ورود</span>
            </button>
          </div>
        </div>
        <div className=" mt-2">
          <span className=" ml-10 font-main text-[12px]">
            حساب کاربری ندارید؟
            <Link to="/Signup">
              <span className=" font-semibold text-[12px] hover:border-b-[2px] hover:border-b-primary-100">
                ثبت نام در سایت
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
