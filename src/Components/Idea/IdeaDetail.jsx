import React, { useEffect, useState,createContext } from "react";
import Navbar from "../Global/Navbar";
import { data } from "../../data/data";
import { FaRegFilePdf } from "react-icons/fa";
import { Link, useParams , useNavigate } from "react-router-dom";
import Delete from "./DeletePopupI";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Loading from "../Global/Loading";
import Footer from "../Global/Footer";
const MyContext_2 = createContext();
const IdeaDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const [video, setVideo] = useState([])
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
  async function HandelDeleteIdea()
  {
    setShowModal(true);
  }
  useEffect(() => {
    const ShowIdea = async () => {
      try {
        const response = await fetch(
          `https://biglybigly.iran.liara.run/api/v1/idea/idea/${id}/`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );
        console.log(response)
        if (response.status != 404)
        {
        const result = await response.json();
        
        console.log(result);
        setIdea(result)
        if (result.creator == userInfo.id) {
          setShowEdit(true)
        }
        setSuccess(true)
      }
      } catch (error) {
      } finally {
      }
    };
    ShowIdea();
  }, [id]);

  return (
    <MyContext_2.Provider value={[showModal, setShowModal]}>
    <div className="w-full  flex flex-col justify-center items-center ">
    {showModal && <Delete />} 
      <Navbar />
      {success &&
        <div className=" container flex flex-col justify-center items-center">
          <video className=" w-[60%] rounded-md mt-10" controls preload="metadata">
            <source src={idea.complete_video} type="video/mp4" />
          </video>
          <div className=" w-[60%] mb-10 pb-10 mt-10 flex flex-col justify-center items-start bg-bg-200/50 shadow-md">
            <div className=" m-12 flex justify-start items-center gap-7">
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
            </div>
            <div className=" mr-12 mt-12 mb-6 flex justify-start items-center gap-7">
              <span className=" text-[22px] text-accent-200 font-bold">
                شرح مختصر :{" "}
              </span>
            </div>
            <p className=" mr-12 ml-12 text-[20px]  indent-8">
              {idea.summary}{" "}
            </p>
          </div>
          <div className="w-[100%] flex flex-col justify-center items-center ">
            <label className="text-[22px] text-accent-200 font-bold start-1">اطلاعات مالی :</label>
            <div className=" w-[60%] mb-10 pb-10 mt-10 flex flex-col justify-center items-center bg-bg-200/50 shadow-md">
              <div className=" w-[100%] flex flex-col mt-2 ">
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <div className="justify-start items-start flex flex-col px-2">
                          <label className=" font-bold ">هزینه کل :</label>
                          <span
                            dir="rtl"
                            className=" my-2 sm:w-[100%] px-2 bg-bg-100 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                          >{idea.total_investment}</span>
                        </div>
                      </th>
                      <th>
                        <div className="justify-start items-start flex flex-col px-2">
                          <label className="text-[22px] text-accent-200 font-bold">زمان کل (به ماه) :</label>
                          <span
                            dir="rtl"
                            className=" my-2 sm:w-[100%] px-2  bg-bg-100 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                          >{idea.time_to_finish}</span>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <div className="justify-start items-start flex flex-col px-2">
                          <label className="text-[22px] text-accent-200 font-bold ">هزینه تجهیزات :</label>
                          <span
                            dir="rtl"
                            className=" my-2 sm:w-[100%] px-2 bg-bg-100 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                          >{idea.equipment_cost}</span>
                        </div>
                      </th>
                      <th>
                        <div className="justify-start items-start flex flex-col px-2">
                          <label className="text-[22px] text-accent-200 font-bold ">هزینه تجهیزات مصرفی :</label>
                          <span
                            dir="rtl"
                            className=" my-2 sm:w-[100%] px-2 bg-bg-100 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                          >{idea.used_equipment_cost}</span>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <div className="justify-start items-start flex flex-col px-2">
                          <label className="text-[22px] text-accent-200 font-bold ">هزینه نیروی انسانی :</label>
                          <span
                            dir="rtl"
                            className=" my-2 sm:w-[100%] px-2 bg-bg-100 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                          >{idea.hr_cost}</span>
                        </div>
                      </th>
                      <th>
                        <div className="justify-start items-start flex flex-col px-2">
                          <label className="text-[22px] text-accent-200 font-bold ">سایر هزینه ها :</label>
                          <span
                            dir="rtl"
                            className="my-2 sm:w-[100%] px-2 bg-bg-100 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                          >{idea.other_cost}</span>
                        </div>
                      </th>
                    </tr>

                  </tbody>
                </table>
                <div className="sm:w-[100%] sm:h-max sm:flex sm:flex-row  flex-col  items-center justify-center ">
                  <div className=" sm:w-[80%] px-2  pt-4 pb-2 flex flex-col items-start gap-2">
                    <label className=" text-[22px] text-accent-200 font-bold ">توضیحات :</label>
                    <span
                      dir="rtl"
                      className=" sm:w-[100%] px-2 bg-bg-100 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                      type="text"
                      rows="5"
                      placeholder="توضیحات"

                    >{idea.fianancial_summary}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] flex flex-col justify-center items-center ">
            <label className="  font-main ">اطلاعات فروش در سه سال اول تجاری سازی :</label>
            <div className=" w-[60%] mb-10 pb-10 mt-10 flex flex-col justify-center items-center bg-bg-200/50 shadow-md">
              <div className=" w-[100%] flex flex-col mt-2">
                <table>
                  <tbody>
                    <tr className="text-xl justify-start items-start flex">
                      <th >
                        فروش خارجی در بازار عمومی
                      </th>
                    </tr>
                    <tr className="">
                      <th>
                        <div className="justify-start items-start flex flex-col px-2">
                          <label className=" font-main ">تعداد نسخه یا واحد فروش :</label>
                          <span
                            dir="rtl"
                            className="my-2 w-[100%] px bg-bg-100 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md  "
                          >{idea.demostic_sold_unit}</span>
                        </div>
                      </th>
                      <th>
                        <div className="justify-start items-start flex flex-col px-2">
                          <label className="  font-main ">درآمد :</label>
                          <span
                            dir="rtl"
                            className=" my-2 w-[100%] px-24 bg-bg-100 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                          >{idea.demostic_income}</span>
                        </div>
                      </th>
                    </tr>
                    <tr className="text-xl justify-start items-start flex">
                      <th >
                        فروش داخلی در بازار عمومی
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <div className="justify-start items-start flex flex-col px-2">
                          <label className="  font-main ">تعداد نسخه یا واحد فروش :</label>
                          <span
                            dir="rtl"
                            className=" my-2 sm:w-[100%] bg-bg-100 px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                          >{idea.foreign_sold_unit}</span>
                        </div>
                      </th>
                      <th>
                        <div className="justify-start items-start flex flex-col px-2">
                          <label className="  font-main ">درآمد :</label>
                          <span
                            dir="rtl"
                            className="my-2 w-[100%] px-24 bg-bg-100 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                            type="number"
                          >{idea.foreign_income}</span>
                        </div>
                      </th>
                    </tr>
                  </tbody>
                </table>
                <div className="sm:w-[100%] sm:h-max sm:flex sm:flex-row  flex-col  items-center justify-center ">
                  <div className=" sm:w-[80%] px-2  pt-4 pb-2 flex flex-col items-start gap-2">
                    <label className=" font-bold ">توضیحات :</label>
                    <span
                      dir="rtl"
                      className=" sm:w-[100%] px-2 bg-bg-100 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                      type="text"
                    >{idea.description}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[60%] flex flex-col justify-center items-center mt-10">
            <Accordion allowMultipleExpanded={true}
              allowZeroExpanded={true}
              className=" w-[100%] border-collapse"
              icon={<Icon id={1} open={open} />}
              open={open === 1}>
              <AccordionHeader className=" w-full bg-bg-100 hover:border-r-[4px]  p-6 font-black text-accent-200" onClick={() => handleOpen(1)}>عکس</AccordionHeader>
              <AccordionBody>
                <div>
                  <div className="pt-[50px] flex justify-center">
                    <img
                      className=" w-[60%]  rounded-lg mt-10 "
                      src={idea.image}
                    />
                  </div>
                </div>
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
              <AccordionBody className=" flex flex-col justify-center items-center">
                <video className=" w-[60%] flex flex-col items-center rounded-md mt-10" controls preload="metadata">
                  <source src={idea.complete_video} type="video/mp4" />
                </video>
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
              <AccordionBody className=" flex flex-col justify-center items-center">
                <video className=" w-[60%] flex flex-col items-center rounded-md mt-10" controls preload="metadata">
                  <source src={idea.cover_video} type="video/mp4" />
                </video>
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
                <li>
                  <div className=" flex flex-col items-center gap-y-2">
                    <FaRegFilePdf size={60} />
                    <a href={idea.proposal} className="w-[70%]">دانلود</a>
                  </div>
                </li>
              </AccordionBody>
            </Accordion>
          </div>
          {(showEdit) &&
            <div className=" py-5 px-5 gap-4 flex flex-row justify-center items-center ">
              <Link to={id ? `/EditIdea/${id}` : `/`}>
                <button className="" >
                  <div className=" bg-accent-100 hover:bg-primary-100 hover:text-bg-100 hover:font-bold w-[100%] sm:w-[450px] pt-3 pb-3 flex rounded-[8px] flex-col items-center gap-2">
                    <div className="">
                      <span className="font-main text-[18px]">ویرایش اطلاعات</span>
                    </div>
                  </div>
                </button>
              </Link>
              <button className="" onClick={HandelDeleteIdea} >
              <div className=" bg-accent-100 hover:bg-primary-100 hover:text-bg-100 hover:font-bold w-[100%] sm:w-[450px] pt-3 pb-3 flex rounded-[8px] flex-col items-center gap-2">
                <div className="" >
                  <span className="font-main text-[18px]">پاک کردن</span>
                </div>
              </div>
            </button>
            </div>
          }
        </div>

      }
      {!success &&
        <Loading />
      }
      <Footer />
    </div>
    </MyContext_2.Provider>
  );
};

export {MyContext_2,IdeaDetail};
