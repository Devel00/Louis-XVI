import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { data } from "../data/data";
import { Accordion } from "@material-tailwind/react";
import Acordion from "./Acordion";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";

const ProblemDetail = () => {

  const { id } = useParams();
  const [problems, setProblems] = useState();
  const [success, setSuccess] = useState(false);
  console.log(id)
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
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
      }
    };
    ShowProblems();
  }, [id]);
  console.log(problems);

  return (
    <div className="  w-full">
      <Navbar />
      <div className="max-w-[1400px] mx-auto">
        { success && 
        <div className="pt-[50px] flex justify-center">
          <img
            className=" w-[60%]  rounded-lg mt-10 "
            alt="ProblemImage"
            src={`https://biglybigly.iran.liara.run/${problems.main_image}`}
          />
        </div>
        }
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
        {/* <div className="py-[50px] flex justify-center">
          <div className=" w-[70%] flex flex-col justify-center items-center mt-10">
            <Acordion />
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default ProblemDetail;
