import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { data } from "../data/data";
import { Accordion } from "@material-tailwind/react";
import Acordion from "./Acordion";
import { useParams } from "react-router-dom";

const IdeaDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    const ShowProblems = async () => {
      try {
        const response = await fetch(
          `https://biglybigly.iran.liara.run/api/v1/idea/idea/${id}/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
      }
    };
    ShowProblems();
    //   ShowProblems();
  }, [id]);

  return (
    <div className="  w-full">
      <Navbar />
      <div className="  container flex flex-col justify-center items-center">
        <video className=" w-[60%] rounded-md mt-10" controls>
          <source src={data[14].image} type="video/mp4" />
        </video>
        <div className=" w-[60%] mb-10 pb-10 mt-10 flex flex-col justify-center items-start bg-bg-200/50 shadow-md">
          <div className=" m-12 flex justify-start items-center gap-7">
            <span className=" text-[22px] text-accent-200 font-bold">
              عنوان:
            </span>
            <div className=" gap-2 flex flex-col justify-center items-center">
              <span className=" text-[20px]">خودرو برقی با ویژگی ...</span>
              <span className=" text-[20px] text-text-200">
                electrical machine{" "}
              </span>
            </div>
          </div>
          <div className=" m-12 flex justify-start items-center gap-7">
            <span className=" text-[22px] text-accent-200 font-bold">
              حوزه تکنولوژی :{" "}
            </span>
            <span className=" text-[20px]">فناوری , الکترونیک</span>
          </div>
          <div className=" mr-12 mt-12 mb-6 flex justify-start items-center gap-7">
            <span className=" text-[22px] text-accent-200 font-bold">
              شرح مختصر :{" "}
            </span>
          </div>
          <p className=" mr-12 ml-12 text-[20px]  indent-8">
            خودروی برقی که از سلول خورشیدی برای تأمین برق خود استفاده می‌کند
            خودروی خورشیدی و خودرویی که برای تأمین برق از مولد بنزینی استفاده
            می‌کند{" "}
          </p>
        </div>
        <div className=" w-[60%] flex flex-col justify-center items-center mt-10">
          <Acordion />
        </div>
      </div>
    </div>
  );
};

export default IdeaDetail;
