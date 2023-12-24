import React from "react";
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

const Acordion = () => {
  return (
    <div className=" w-full mb-10">
      <Accordion
        allowMultipleExpanded={true}
        allowZeroExpanded={true}
        className=" w-[100%] border-collapse"
      >
        <AccordionItem className=" mb-10 w-full  shadow-md">
          <AccordionItemHeading className="w-full">
            <AccordionItemButton className=" w-full bg-bg-100 hover:border-r-[2px]  p-6 font-black text-accent-200">
              <div className=" flex justify-between items-center">
                <span className=" text-[20px]">تصاویر</span>
                <MdKeyboardArrowLeft size={40} />
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className=" w-full bg-bg-200/50  shadow-md">
            <div className=" flex justify-start items-center m-4 ">
              <img
                className=" m-2 w-[31.5%] h-[30%] "
                src={data[12].image}
                alt=""
              ></img>
              <img
                className=" m-2 w-[31.5%] h-[30%] "
                src={data[12].image}
                alt=""
              ></img>
              <img
                className=" m-2 w-[31.5%] h-[30%] "
                src={data[12].image}
                alt=""
              ></img>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className=" mb-10 w-full  shadow-md">
          <AccordionItemHeading className="w-full">
            <AccordionItemButton className=" w-full bg-bg-100 hover:border-r-[2px]  p-6 font-black text-accent-200">
              <div className=" flex justify-between items-center">
                <span className=" text-[20px]">مشاهده پروپوزال</span>
                <MdKeyboardArrowLeft size={40} />
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
              occaecat ut occaecat consequat est minim minim esse tempor laborum
              consequat esse adipisicing eu reprehenderit enim.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className=" mb-10 w-full  shadow-md">
          <AccordionItemHeading className="w-full">
            <AccordionItemButton className=" w-full bg-bg-100 hover:border-r-[2px]  p-6 font-black text-accent-200">
              <div className=" flex justify-between items-center">
                <span className=" text-[20px]">اطلاعات مالی </span>
                <MdKeyboardArrowLeft size={40} />
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className=" w-full">
            <div className=" flex flex-col w-full justify-center items-between">
              <div className=" flex   items-center justify-center gap-[100px] m-10 ">
                <div className=" flex flex-col justify-center bg-bg-200 shadow-md p-5 w-full items-center">
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
              <div className=" flex   items-center justify-center gap-[100px] m-10 ">
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
              <div className=" flex   items-center justify-center gap-[100px] m-10 ">
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
          <AccordionItemHeading className="w-full">
            <AccordionItemButton className=" w-full bg-bg-100 hover: border-r-[2px]  p-6 font-black text-accent-200">
              <div className=" flex justify-between items-center">
                <span className=" text-[20px]">
                  اطلاعات فروش در سه سال اول{" "}
                </span>
                <MdKeyboardArrowLeft size={40} />
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
              occaecat ut occaecat consequat est minim minim esse tempor laborum
              consequat esse adipisicing eu reprehenderit enim.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Acordion;
