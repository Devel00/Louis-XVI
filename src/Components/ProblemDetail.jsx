import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { data } from "../data/data";
import { Accordion } from "@material-tailwind/react";
import Acordion from "./Acordion";
import { Link, useParams , useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Loading from "./Loading"

const ProblemDetail = () => {
  const { id } = useParams();
  const [problems, setProblems] = useState();
  const [success, setSuccess] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("Info"))
  );
  const [amount , setAmount] = useState()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(id)
  console.log(localStorage.getItem("token"))
  useEffect(() => {
    const ShowProblems = async () => {
      try {
        const response = await fetch(
          `https://biglybigly.iran.liara.run/api/v1/problems/problems/${id}/`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );
        const result = await response.json();
        console.log(result);
        setProblems(result);
        setSuccess(true);
        if (result.creator.id == userInfo.id)
        {
          setShowEdit(true)
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
      }
    };
    ShowProblems();
  }, [id]);
  const navigate = useNavigate()
  async function HandelDeleteProblem()
  {
    await fetch(`https://biglybigly.iran.liara.run/api/v1/problems/problems/${id}/`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                Authorization: `${localStorage.getItem("token")}`,
            },
        })
            .then(() => {
                navigate("/Manager");
                console.log("sucess");
            })
            .catch((e) => {
                console.log(e);
            });
  }

  async function HandelVolanteer()
  {
    const formdata = new FormData();
        formdata.append("problem", parseInt(id));
        formdata.append("amount", parseInt(amount));
        // formdata.append("user", userInfo.id);
        
    await fetch(`https://biglybigly.iran.liara.run/api/v1/problems/fund/`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `${localStorage.getItem("token")}`,
            },
            body: formdata,
        })
  }


  return (
    <div className="  w-full">
      <Navbar />
      {success &&
      <div className="max-w-[1400px] mx-auto">
        <div className="pt-[50px] flex justify-center">
          <img
            className=" w-[60%]  rounded-lg mt-10 "
            alt="ProblemImage"
            src={`https://biglybigly.iran.liara.run/${problems.main_image}`}
          />
        </div>
        <div className="pt-[50px] flex justify-center">
          <div className=" w-[60%] mb-10 pb-10 mt-10 flex flex-col justify-center items-start bg-bg-200/50 shadow-md">
            <div className=" m-12 pt-[10px] flex justify-start items-center gap-7">
              <span className=" text-[30px] text-accent-200 font-bold">
                عنوان:
              </span>
              <div className=" gap-1 flex flex-col justify-center items-center">
                <span className=" text-[30px] text-200 ">
                  {success &&
                    <div>
                      {problems.title}
                    </div>}
                </span>
              </div>
            </div>
            <div className=" m-12 pt-[10px] flex justify-start items-center gap-7">
              <span className=" text-[30px] text-accent-200 font-bold">
                قیمت :
              </span>
              <div className=" gap-1 flex flex-col justify-center items-center">
                <span className=" text-[30px] text-200 ">
                  {success &&
                    <div>
                      {problems.financial_amount} تومان 
                    </div>}
                </span>
              </div>
            </div>
            <div className=" mr-12 mt-12 mb-6 flex justify-start items-center gap-7">
              <span className=" text-[30px] text-accent-200 font-bold">
                شرح مختصر :{" "}
              </span>
            </div>
            <p className=" mr-12 ml-12 text-[30px] text-justify text-200">
              {success &&
                <div>
                  {problems.description}
                </div>}
            </p>
          </div>
        </div>
        { (showEdit) && 
        <div className=" py-5 px-5 gap-4 flex flex-row justify-center items-center ">
            <Link to={id ? `/EditProblem/${id}` : `/`}>
              <button className="" >
                <div className=" bg-accent-100 hover:bg-primary-100 hover:text-bg-100 hover:font-bold w-[100%] sm:w-[450px] pt-3 pb-3 flex rounded-[8px] flex-col items-center gap-2">
                  <div className="">
                    <span className="font-main text-[18px]">ویرایش اطلاعات</span>
                  </div>
                </div>
              </button>
            </Link>
            <button className="" onClick={HandelDeleteProblem} >
              <div className=" bg-accent-100 hover:bg-primary-100 hover:text-bg-100 hover:font-bold w-[100%] sm:w-[450px] pt-3 pb-3 flex rounded-[8px] flex-col items-center gap-2">
                <div className="">
                  <span className="font-main text-[18px]">پاک کردن</span>
                </div>
              </div>
            </button>
          </div>
        }
        <div className="  gap-4 flex flex-col justify-center items-center w-[100%] " >
        { (!showEdit) && 
        <div className="  gap-4 flex flex-col justify-center items-center w-[50%] ">
            <div className=" sm:w-[80%] px-2  pt-4 pb-2 flex flex-col items-start gap-2">
                            <label className=" font-bold font-main ">
                                میزان مشارکت برای حل مشکل :
                            </label>
                            <input
                                dir="rtl"
                                className=" sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                                type="number"
                                rows="5"
                                placeholder="به تومان"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            ></input>
                        </div>
            <button className="" onClick={HandelVolanteer} >
              <div className=" bg-accent-100 hover:bg-primary-100 hover:text-bg-100 hover:font-bold w-[100%] sm:w-[450px] pt-3 pb-3 flex rounded-[8px] flex-col items-center gap-2">
                <div className="">
                  <span className="font-main text-[18px]">مشارکت کردن</span>
                </div>
              </div>
            </button>
          </div>
        }
        
        </div>
      </div>
    }
    {! success &&
      <Loading/>
    }
      <Footer />
    </div>
  );
};

export default ProblemDetail;
