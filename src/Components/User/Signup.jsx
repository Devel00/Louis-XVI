import React, { useState, useEffect } from "react";
import { data } from "../../data/data";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import { MdErrorOutline } from "react-icons/md";

export const MyContext = createContext("");
const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [account, setAcount] = useState(null);
  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState("");

  useEffect(() => {
    const ShowProblems = async () => {};
    setError(false);
    setEmpty(false);
    //   ShowProblems();
  }, []);

  async function handleSignup() {
    setError(false);
    setEmpty(false);

    let Signup = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phone_number,
      email: "",
      password: password,
    };

    await fetch("https://biglybigly.iran.liara.run/api/v1/auth/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Signup),
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("token", "JWT " + json.data.access);
        console.log("token: ", json.data);
        console.log("status", json.status_code);
        setAcount();
        if (!(firstName && lastName && phone_number && password)) {
          setEmpty(true);
        }
        console.log(empty);
        if (json.status_code == 200) {
          navigate("/login");
        } else if (json.status_code == 400 && phone_number) {
          setError(true);
        }
      })
      .catch((e) => {
        console.log("login erorr ==>>> ", e);
      });
  }

  return (
    <div className="h-screen bg-white font-main flex flex-col  justify-center items-center ">
      <MyContext.Provider value={{ account, setAcount }}>
        <div className="w-[35%] h-screen left-0 top-0 absolute bg-accent-100/80" />
        <div className="w-[55%] ml-20 h-[70%]  flex flex-col items-center justify-center z-30  bg-bg-100 bg-opacity-0 shadow-[-18px_10px_80px_-5px_rgba(5,5,5,0.3)] shadow-text-200/60">
          <div className="w-[14.5%] flex-col items-end  h-[70%] left-[20.5%] top-[15%] absolute bg-accent-100  ">
            <img
              className=" w-[80%] absolute left-[10%] top-[30%] mx-0 my-auto"
              src={data[1].image}
              alt=""
            ></img>
          </div>

          <div className=" pt-4 pb-8">
            <span className=" text-text-100 font-black sm:text-[26px] text-[18px] px-2 ">
              ثبت نام
            </span>
          </div>

          <div className="sm:flex sm:flex-row flex-col  sm:pl-11 items-center justify-center ">
            <div className=" px-2  pt-4 pb-2 flex flex-col items-start gap-2">
              <label className="  font-main ">نام :</label>
              <input
                required
                dir="rlt"
                className=" w-[80%] sm:w-[215px] px-2 font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                type="text"
                placeholder="محمد حسین"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
            </div>

            <div className="  px-2  pt-4 pb-2 flex flex-col items-start gap-2">
              <label className="  font-main ">نام خانوادگی :</label>
              <input
                required
                dir="rtl"
                className=" sm:w-[215px] w-[80%] px-2 font-normal placeholder:text-[15px] text-[15px] rounded-[8px] placeholder:text-bg-300  py-2 border border-bg-200 shadow-md "
                type="text"
                placeholder="اکبری"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="sm:flex sm:flex-row flex-col sm:pl-11 items-center justify-center ">
            <div className=" px-2  py-8 flex flex-col items-start gap-2">
              <label className="  font-main ">شماره همراه :</label>
              <input
                dir="ltr"
                className=" w-[80%] sm:w-[215px] px-2 font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[15px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                type="text"
                placeholder="09012725754"
                value={phone_number}
                onChange={(e) => setPhone_number(e.target.value)}
              ></input>
            </div>
            <div className="  px-2   pt-4 pb-10 sm:py-8 flex flex-col items-start gap-2">
              <label className="  font-main ">رمز عبور :</label>
              <input
                dir="ltr"
                className=" sm:w-[215px] w-[80%] px-2 font-normal placeholder:text-[15px] text-[20px] rounded-[8px] placeholder:text-bg-300  py-2 border border-bg-200 shadow-md "
                type="password"
                placeholder="12345"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </div>

          <button onClick={handleSignup} className="hover:cursor-pointer">
            <div className=" px-10 ml-12 bg-accent-100 text-bg-100 hover:scale-105 duration-700 w-[61%] sm:w-[450px] pt-3 pb-3 flex rounded-[8px] flex-col items-center gap-2">
              <div className="">
                <span className=" text-[18px]">ثبت</span>
              </div>
            </div>
          </button>
          {error && (
            <div className="flex gap-2 mt-10 rounded-md py-2 px-4 ">
              <MdErrorOutline size={25} className=" text-[#ff3333]" />
              <span className=" text-[16px] font-medium text-[#ff3333]">
                این شماره همراه قبلا ثبت شده است{" "}
              </span>
            </div>
          )}
          {empty && (
            <div className="flex gap-2 mb-10 mt-4 rounded-md py-2 px-4 ">
              <MdErrorOutline size={25} className=" text-[#ff3333]" />
              <span className=" text-[16px] font-medium text-[#ff3333]">
                لطفا همه فیلد ها را پر کنید{" "}
              </span>
            </div>
          )}
        </div>
      </MyContext.Provider>
    </div>
  );
};

export default Login;
