import React,{useState} from "react";
import { data } from "../data/data";
import {send_udata_f_signup} from "../services/signup";

const Login = () => {
  const [firstname , setFirstname] = useState("")
  const [lastname , setLastName] = useState("")
  const [phonenumber, setPhonenumber] = useState("")
  const [email , setEmail] = useState("")
  const [password, setPassword] = useState("")
  async function handlesignup(){

    console.log({"first_name":firstname, "last_name":lastname,"phone_number":phonenumber,"email":email , "password":password})
    await send_udata_f_signup({"first_name":firstname, "last_name":lastname,"phone_number":phonenumber,"email":email , "password":password})
  }


  return (
    <div className="h-screen bg-white font-main flex flex-col  justify-center items-center ">
      <div className="w-[35%] h-screen left-0 top-0 absolute bg-accent-100/80" />
      <div className="w-[55%] h-[65%]  flex flex-col items-center justify-center z-30  bg-bg-100 bg-opacity-0 shadow-[-18px_10px_80px_-5px_rgba(5,5,5,0.3)] shadow-text-200/60">
        <div className="w-[14.5%] flex-col items-end  h-[65%] left-[20.5%] top-[17.5%] absolute bg-accent-100  ">
          <img
            className=" w-[80%] absolute left-[10%] top-[30%] mx-0 my-auto"
            src={data[1].image}
            alt=""
          ></img>
        </div>

        <div className=" pt-4">
          <span className=" text-text-100 font-black sm:text-[26px] text-[18px] px-2 ">
            ورود به صفحه کاربری
          </span>
        </div>

        <div className="sm:flex sm:flex-row flex-col  sm:pl-11 items-center justify-center ">
          <div className=" px-2  pt-4 pb-2 flex flex-col items-start gap-2">
            <label className="  font-main ">نام :</label>
            <input
              dir="ltr"
              className=" w-[80%] sm:w-[215px] px-2 font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
              type="text"
              placeholder="first name ..."
            ></input>
          </div>

          <div className="  px-2  pt-4 pb-2 flex flex-col items-start gap-2">
            <label className="  font-main ">نام خانوادگی :</label>
            <input
              dir="ltr"
              className=" sm:w-[215px] w-[80%] px-2 font-normal placeholder:text-[15px] text-[20px] rounded-[8px] placeholder:text-bg-300  py-2 border border-bg-200 shadow-md "
              type="text"
              placeholder="last name  ..."
            ></input>
          </div>
        </div>
        <div className="sm:flex sm:flex-row flex-col sm:pl-11 items-center justify-center ">
          <div className=" px-2  py-8 flex flex-col items-start gap-2">
            <label className="  font-main ">نام کاربری :</label>
            <input
              dir="ltr"
              className=" w-[80%] sm:w-[215px] px-2 font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
              type="text"
              placeholder="username ..."
            ></input>
          </div>
          <div className="  px-2   pt-4 pb-10 sm:py-8 flex flex-col items-start gap-2">
            <label className="  font-main ">نام خانوادگی :</label>
            <input
              dir="ltr"
              className=" sm:w-[215px] w-[80%] px-2 font-normal placeholder:text-[15px] text-[20px] rounded-[8px] placeholder:text-bg-300  py-2 border border-bg-200 shadow-md "
              type="text"
              placeholder="last name  ..."
            ></input>
          </div>
        </div>

        <div className=" px-10 ml-12 bg-accent-100 w-[61%] sm:w-[450px] pt-3 pb-3 flex rounded-[8px] flex-col items-center gap-2">
          <div className="   ">
            <button className="">
              <span className=" text-[18px]">ورود</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
