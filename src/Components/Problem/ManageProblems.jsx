import React, { useState, useEffect } from "react";
import Footer from "../Global/Footer";
import Navbar from "../Global/Navbar";
import Card from "./PCard";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import Loading from "../Global/Loading";

const ManageProblems = () => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("Info"))
  );
  console.log(userInfo.id)
  const [problems, setProblems] = useState();
  const [success, setSuccess] = useState(false);
  let i = 0;
  // console.log(localStorage.getItem("token"))
  useEffect(() => {
    const ShowProblems = async () => {
      try {
        const response = await fetch(
          `https://biglybigly.iran.liara.run/api/v1/problems/user-problems/${userInfo.id}/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        const result = await response.json();
        console.log(result);
        setProblems(result);
        setSuccess(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
      }
    };
    ShowProblems();
  }, [userInfo.id]);
  return (
    <div className="">
      <Navbar />
      <div>
        {success &&
          <div className=" scale-90 m-2 grid grid-cols-3 gap-y-6 animate-fade-up">

            {success && problems.data.map((item, index) => (
                <div >
                <Card detail={item}/>
              </div>
            ))
              
        }
            <Link to="/AddProblem">
              <div className="w-[85%] h-[450px] bg-bg-200 hover:bg-bg-300/70 rounded-[24px]  overflow-hidden shadow-xl flex flex-col  justify-center items-center">
                <CiCirclePlus className=" text-primary-100" size={90} />
                <div className=" font-main font-bold mb-2">
                  اضافه كردن كارت مشكل
                </div>
              </div>
            </Link>
          </div>
        }
        {!success &&

          <Loading />
        }
      </div>
    </div>
  );
};

export default ManageProblems;
