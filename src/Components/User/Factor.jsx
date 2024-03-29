import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { data } from "../../data/data";
import Loading from "../Global/Loading"

const Factor = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("Info"))
  );
  const [user, setUser] = useState()
  const [success, setSuccess] = useState()
  function returnPage() {
    navigate("/Profile");
  }
  useEffect(() => {
    const GetInfo = async () => {
      const response = await fetch(
        `https://biglybigly.iran.liara.run/api/v1/user/${userInfo.id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      const result = await response.json();
      setUser(result);
      setSuccess(true);
    };

    GetInfo();
  }, []);


  return (
    <div className="bg-[#ffffff] flex flex-row justify-center w-full">
      {success &&
        <div className="bg-[#ffffff]  overflow-hidden w-[1440px] h-[1024px] relative">
          <div className="absolute  w-[1442px] h-[433px] top-0 left-[-14px]">
            <div className="absolute  w-[1440px] h-[145px] top-0 left-0">
              <div className="absolute w-[1440px] h-[136px] top-[9px] left-0 bg-bg-200" />
              <img
                className=" absolute top-6 left-[43%] w-[100px] h-[100px]"
                src={data[1].image}
                alt=""
              ></img>
            </div>
            <img
              className=" absolute top-[300px] left-[32%] w-[120px] h-[120px]"
              src={data[9].image}
              alt=""
            ></img>
            <span className="h-[63px] top-[345px] left-[600px] font-main text-accent-200 text-[40px] absolute text-center tracking-[0] leading-[normal] [direction:rtl]">
              {user.first_name} {user.last_name}
            </span>
            <img
              className=" absolute top-[520px] left-[15%] w-[900px] h-[120px]"
              src={data[10].image}
              alt=""
            ></img>{" "}
          </div>
          <div className="absolute w-[582px] h-[90px] top-[478px] left-[397px]">
            <p className="h-[109px] w-[900px] top-[26px] left-[-160px] font-main font-black text-accent-200 text-[40px] absolute text-center tracking-[0] leading-[normal] [direction:rtl]">
              خرید شما با موفقیت انجام شد
            </p>
            <img
              className=" absolute top-[-10px] left-[-21%] w-[120px] h-[120px]"
              src={data[11].image}
              alt=""
            ></img>
          </div>
          <div className="absolute w-[525px] h-[81px] top-[778px] left-[470px]">
            <div className="relative w-[588px] h-[81px] left-[-25px]">
              <button
                onClick={returnPage}
                className="w-[588px] h-[81px] rounded-lg top-0 left-0 absolute bg-accent-100 hover:bg-accent-200"
              >
                <span className="h-[47px] top-[20px] left-[256px] font-main text-[#ffffff] text-[30px] absolute text-center tracking-[0] leading-[normal] [direction:rtl]">
                  بازگشت
                </span>
              </button>
            </div>
          </div>
        </div>
      }
      {!success &&
        <Loading />
      }

    </div>
  );
};
export default Factor;
