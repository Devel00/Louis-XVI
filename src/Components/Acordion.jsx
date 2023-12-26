import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { data } from "../data/data";
import HW3 from "../HW3.pdf";

const Acordion = () => {
  const [arraow, setArrow] = useState(true);
  const [arraow1, setArrow1] = useState(true);
  const [arraow2, setArrow2] = useState(true);
  const [arraow3, setArrow3] = useState(true);

  return (
    <div className=" w-full mb-10">
      <Accordion
        allowMultipleExpanded={true}
        allowZeroExpanded={true}
        className=" w-[100%] border-collapse"
      >
        <AccordionItem className=" mb-10 w-full  shadow-md">
          <AccordionItemHeading
            onClick={() => setArrow(!arraow)}
            className="w-full"
          >
            <AccordionItemButton className=" w-full bg-bg-100 hover:border-r-[2px]  p-6 font-black text-accent-200">
              <div className=" flex justify-between items-center">
                <span className=" text-[20px]">تصاویر</span>
                <MdKeyboardArrowLeft
                  size={40}
                  className={arraow ? "" : " rotate-[-90deg]"}
                />
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className=" w-full bg-bg-200/50  shadow-md">
            <div className=" flex sm:flex-row flex-col  justify-start items-center m-4 ">
              <img
                className=" m-2 w-[31.5%] h-[40%] "
                src={data[12].image}
                alt=""
              ></img>
              <img
                className=" m-2 w-[31.5%] h-[40%] "
                src={data[12].image}
                alt=""
              ></img>
              <img
                className=" m-2 w-[31.5%] h-[40%] "
                src={data[12].image}
                alt=""
              ></img>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className=" mb-10 w-full  shadow-md">
          <AccordionItemHeading
            onClick={() => setArrow1(!arraow1)}
            className="w-full"
          >
            <AccordionItemButton className=" w-full bg-bg-100 hover:border-r-[2px]  p-6 font-black text-accent-200">
              <div className=" flex justify-between items-center">
                <span className=" text-[20px]">مشاهده پروپوزال</span>
                <MdKeyboardArrowLeft
                  size={40}
                  className={arraow1 ? "" : " rotate-[-90deg]"}
                />
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className=" w-full">
            <a href={HW3} download="Resume">
              <button className=" bg-accent-100 text-bg-100 font-semibold text-[18px] py-2 px-4 rounded-[8px] sm:w-[40%] w-[60%] m-6   ">
                دانلود پروپوزال
              </button>
            </a>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className=" mb-10 w-full  shadow-md">
          <AccordionItemHeading
            onClick={() => setArrow2(!arraow2)}
            className="w-full"
          >
            <AccordionItemButton className=" w-full bg-bg-100 hover:border-r-[2px]  p-6 font-black text-accent-200">
              <div className=" flex justify-between items-center">
                <span className=" text-[20px]">اطلاعات مالی </span>
                <MdKeyboardArrowLeft
                  size={40}
                  className={arraow2 ? "" : " rotate-[-90deg]"}
                />
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className=" w-full">
            <div className=" flex flex-col w-full justify-center items-between">
              <div className=" flex sm:flex-row flex-col  items-center justify-center gap-[100px] m-10 ">
                <div className=" flex flex-col justify-center    bg-bg-200 shadow-md p-5 w-full items-center">
                  <span className=" font-bold text-accent-200">هزینه کل: </span>
                  <span className="mr-20 mt-4">100,000,000</span>
                </div>
                <div className="bg-bg-200 shadow-md p-5 w-full  flex flex-col justify-center items-center">
                  <span className=" font-bold indent-8 text-accent-200">
                    زمان کل (به ماه):{" "}
                  </span>
                  <span className="mr-20 mt-4">100,000,000</span>
                </div>
              </div>
              <div className=" flex  sm:flex-row flex-col items-center justify-center gap-[100px] m-10 ">
                <div className=" flex flex-col justify-center bg-bg-200 shadow-md p-5 w-full items-center">
                  <span className=" font-bold text-accent-200">
                    هزینه تجهیزات :{" "}
                  </span>
                  <span className="mr-20 mt-4">100,000,000</span>
                </div>
                <div className="bg-bg-200 shadow-md p-5 w-full  flex flex-col justify-center items-center">
                  <span className=" font-bold indent-8 text-accent-200">
                    هزینه مواد مصرفی :{" "}
                  </span>
                  <span className="mr-20 mt-4">100,000,000</span>
                </div>
              </div>
              <div className=" flex   sm:flex-row flex-col items-center justify-center gap-[100px] m-10 ">
                <div className=" bg-bg-200 shadow-md p-5 w-full flex  flex-col  justify-center items-center">
                  <span className=" font-bold text-accent-200">
                    هزینه نیروی انسانی :{" "}
                  </span>
                  <span className="mr-20 mt-4">100,000,000</span>
                </div>
                <div className=" bg-bg-200 shadow-md p-5 w-full flex flex-col justify-center items-center">
                  <span className=" font-bold text-accent-200">
                    سایر هزینه ها:{" "}
                  </span>
                  <span className="mr-20 mt-4">100,000,000</span>
                </div>
              </div>
              <div className=" flex flex-col bg-bg-200 shadow-md m-10 gap-4">
                <span className=" text-accent-200 font-bold mt-5 ">
                  توضیحات :
                </span>
                <p className=" mb-5 mr-10 ml-10">
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className=" mb-10 w-full  shadow-md">
          <AccordionItemHeading
            onClick={() => setArrow3(!arraow3)}
            className="w-full"
          >
            <AccordionItemButton className=" w-full bg-bg-100 hover:border-r-[2px]  p-6 font-black text-accent-200">
              <div className=" flex justify-between items-center">
                <span className=" text-[20px]">
                  اطلاعات فروش در سه سال اول{" "}
                </span>
                <MdKeyboardArrowLeft
                  size={40}
                  className={arraow3 ? "" : " rotate-[-90deg]"}
                />
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className=" w-full">
            <div className=" flex flex-col w-full justify-center items-between">
              <div className="w-full  flex flex-col justify-center items-center">
                <span className=" w-full font-bold text-[25px] text-accent-200">
                  فروش خارجی :
                </span>
                <div className="w-[90%] flex   sm:flex-row flex-col items-center justify-center gap-[100px] m-10 ">
                  <div className=" flex flex-col justify-center bg-bg-200 shadow-md p-5 w-full items-center">
                    <span className=" font-bold text-accent-200">
                      تعداد نسخه یا واحد فروش:{" "}
                    </span>
                    <span className="mr-20 mt-4">100,000,000</span>
                  </div>
                  <div className="bg-bg-200 shadow-md p-5 w-full  flex flex-col justify-center items-center">
                    <span className=" font-bold indent-8 text-accent-200">
                      درآمد:{" "}
                    </span>
                    <span className="mr-20 mt-4">100,000,000</span>
                  </div>
                </div>
              </div>
              <div className="mt-10 w-full flex flex-col justify-center items-center">
                <span className=" w-full font-bold text-[25px] text-accent-200">
                  فروش داخلی :
                </span>
                <div className="w-[90%] flex sm:flex-row flex-col items-center justify-center gap-[100px] m-10 ">
                  <div className=" flex flex-col justify-center bg-bg-200 shadow-md p-5 w-full items-center">
                    <span className=" font-bold text-accent-200">
                      تعداد نسخه یا واحد فروش:{" "}
                    </span>
                    <span className="mr-20 mt-4">100,000,000</span>
                  </div>
                  <div className="bg-bg-200 shadow-md p-5 w-full  flex flex-col justify-center items-center">
                    <span className=" font-bold indent-8 text-accent-200">
                      درآمد:{" "}
                    </span>
                    <span className="mr-20 mt-4">100,000,000</span>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col bg-bg-200 shadow-md m-10 gap-4">
                <span className=" text-accent-200 font-bold mt-5 ">
                  توضیحات :
                </span>
                <p className=" mb-5 mr-10 ml-10">
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Acordion;
