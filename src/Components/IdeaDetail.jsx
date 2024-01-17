import React, { useEffect,useState } from "react";
import Navbar from "./Navbar";
import { data } from "../data/data";
// import { Accordion } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const IdeaDetail = () => {
  const [open, setOpen] = useState(0);
  const { id } = useParams();
  const [idea, setIdea] = useState();
  const [success, setSuccess] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("Info")));
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const [arraow, setArrow] = useState(true);
  const [arraow1, setArrow1] = useState(true);
  const [arraow2, setArrow2] = useState(true);
  const [arraow3, setArrow3] = useState(true);
  function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? " rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}
  useEffect(() => {
    const ShowIdea = async () => {
      try {
        // const response = await fetch(
        //   `https://biglybigly.iran.liara.run/api/v1/idea/idea/${id}/`,
        //   {
        //     method: "GET",
        //     headers: {
        //       Accept: "application/json",
        //     },
        //   }
        // );
        // const result = await response.json();
        // console.log(result);
        // setIdea(result)
        // if (result.creator.id == userInfo.id) {
        //   setShowEdit(true)
        // }
        setSuccess(true)
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
      }
    };
    ShowIdea();
  }, [id]);

  return (
    <div className="  w-full">
      <Navbar />
      {success &&
      <div className="  container flex flex-col justify-center items-center">
        {/* <video className=" w-[60%] rounded-md mt-10" controls>
          <source src={idea.complete_video} type="video/mp4" />
        </video> */}
        <div className=" w-[60%] mb-10 pb-10 mt-10 flex flex-col justify-center items-start bg-bg-200/50 shadow-md">
          {/* <div className=" m-12 flex justify-start items-center gap-7">
            <span className=" text-[22px] text-accent-200 font-bold">
              عنوان:
            </span>
            <div className=" gap-2 flex flex-col justify-center items-center">
              <span className=" text-[20px]">{idea.farsi_title}</span>
              <span className=" text-[20px] text-text-200">
                {idea.english_title}{" "}
              </span>
            </div>
          </div>
          <div className=" m-12 flex justify-start items-center gap-7">
            <span className=" text-[22px] text-accent-200 font-bold">
              حوزه تکنولوژی :{" "}
            </span>
            <span className=" text-[20px]">{idea.tech_field}</span>
          </div> */}
          {/* <div className=" mr-12 mt-12 mb-6 flex justify-start items-center gap-7">
            <span className=" text-[22px] text-accent-200 font-bold">
              شرح مختصر :{" "}
            </span>
          </div>
          <p className=" mr-12 ml-12 text-[20px]  indent-8">
            {idea.summary}{" "}
          </p> */}
        </div>
        <div className=" w-[60%] flex flex-col justify-center items-center mt-10">
          <Accordion allowMultipleExpanded={true}
            allowZeroExpanded={true}
            className=" w-[100%] border-collapse"
            icon={<Icon id={1} open={open} />}
            open={open === 1}>
            <AccordionHeader className=" w-full bg-bg-100 hover:border-r-[4px]  p-6 font-black text-accent-200" onClick={() => handleOpen(1)}>عکس</AccordionHeader>
            <AccordionBody>
            </AccordionBody>
          </Accordion>
          <Accordion
            allowMultipleExpanded={true}
            allowZeroExpanded={true}
            icon={<Icon id={2} open={open} />}
            className=" w-[100%] border-collapse"
            open={open === 2}>
            <AccordionHeader className=" w-full bg-bg-100 hover:border-r-[4px]  p-6 font-black text-accent-200" onClick={() => handleOpen(2)}>
              فیلم
            </AccordionHeader>
            <AccordionBody>
            </AccordionBody>
          </Accordion>
          <Accordion
            allowMultipleExpanded={true}
            allowZeroExpanded={true}
            icon={<Icon id={3} open={open} />}
            className=" w-[100%] border-collapse"
            open={open === 3}>
            <AccordionHeader className=" w-full bg-bg-100 hover:border-r-[4px]  p-6 font-black text-accent-200" onClick={() => handleOpen(3)}>
              کاور
            </AccordionHeader>
            <AccordionBody>
            </AccordionBody>
          </Accordion>
          <Accordion
            allowMultipleExpanded={true}
            allowZeroExpanded={true}
            className=" w-[100%] border-collapse"
            icon={<Icon id={4} open={open} />}
            open={open === 4}>
            <AccordionHeader className=" w-full bg-bg-100 hover:border-r-[4px]  p-6 font-black text-accent-200" onClick={() => handleOpen(4)}>
              پروپوزال
            </AccordionHeader>
            <AccordionBody>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      }
    </div>
  );
};

export default IdeaDetail;
