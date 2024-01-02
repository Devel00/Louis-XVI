import React, { useState, createContext, useEffect } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { data } from "../data/data";
import { Link, useNavigate } from "react-router-dom";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};
const AddIdea = () => {
    const [open, setOpen] = useState(0);
    const [pertitle, setPerTitle] = useState("")
    const [engtitle, setEngTitle] = useState("")
    const [techfield, setTechField] = useState("")
    const [briefdesc, setBriefDesc] = useState("")
    const [mybool, setMybool] = useState("")
    const [totcost, setTotCost] = useState("")
    const [timemonth, setTimeMonth] = useState("")
    const [costequipment, setCostEquipment] = useState("")
    const [consumcost, setConsumCost] = useState("")
    const [humancost, setHumanCost] = useState("")
    const [othercost, setOtherCost] = useState("")
    const [description_1, setDescription_1] = useState("")
    const [soldcostforeign, setSoldCostForiegn] = useState("")
    const [incomeforiegn, setIncomeForeign] = useState("")
    const [soldcostDomestic, setSoldCostDomestic] = useState("")
    const [incomedomestic, setIncomeDomestic] = useState("")
    const [description_2, setDescription_2] = useState("")
    const [file, setFile] = useState(null)
    const [image, setImage] = useState([])
    // const [description, setDescription] = useState("")
    // const [money, setMoney] = useState("")
    const [userInfo, setUserInfo] = useState(
        JSON.parse(localStorage.getItem("Info"))
    );
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const [arraow, setArrow] = useState(true);
    const [arraow1, setArrow1] = useState(true);
    const [arraow2, setArrow2] = useState(true);
    const [arraow3, setArrow3] = useState(true);
    const onChangeFile = e => {
        // const test = []
        // test.append(e.target.files[0])
        // console.log(e.target.files)
        // console.log("null",e.target.files[0])
        setImage([...image, e.target.files[0]]);
        // console.log(image);
    };
    const navigate = useNavigate(); //why????
    useEffect(() => { console.log(image) }, [image])
    async function handelCreateProblem() {
    }
    function Icon({ id, open }) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        );
    }

    return (
        <div class="flex items-center justify-center p-5">
            <div className="w-[55%] h-[100%] rounded-sm  flex flex-col items-center justify-center z-30 bg-primary-200 bg-opacity-60 shadow-[-18px_10px_80px_-5px_rgba(5,5,5,0.3)] shadow-text-200/60">
                <div className="w-full flex justify-center items-center p-2 bg-primary-300 rounded-sm">
                    <img
                        className=" w-20"
                        src={data[1].image}
                        alt=""
                    ></img>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center gap-1">
                    <div className="sm:w-[100%] sm:flex sm:flex-row  flex-col  items-center justify-center ">
                        <div className=" sm:w-[80%] px-2  pt-4 pb-2 flex flex-col items-start gap-2">
                            <label className="  font-main ">عنوان فارسی :</label>
                            <input
                                dir="rtl"
                                className=" sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                                type="text"
                                placeholder="عنوان فارسی"
                                value={pertitle}
                                onChange={(e) => setPerTitle(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div className="sm:w-[100%] sm:flex sm:flex-row  flex-col  items-center justify-center ">
                        <div className=" sm:w-[80%] px-2  pt-4 pb-2 flex flex-col items-start gap-2">
                            <label className="  font-main ">عنوان انگلیسی :</label>
                            <input
                                dir="ltr"
                                className=" sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                                type="text"
                                placeholder="english title"
                                value={engtitle}
                                onChange={(e) => setEngTitle(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div className="sm:w-[100%] sm:flex sm:flex-row  flex-col  items-center justify-center ">
                        <div className=" sm:w-[80%] px-2  pt-4 pb-2 flex flex-col items-start gap-2">
                            <label className="  font-main ">حوزه فناوری :</label>
                            <input
                                dir="rtl"
                                className=" sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                                type="text"
                                placeholder="حوزه فناوری"
                                value={techfield}
                                onChange={(e) => setTechField(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div className="sm:w-[100%] sm:h-max sm:flex sm:flex-row  flex-col  items-center justify-center ">
                        <div className=" sm:w-[80%] px-2  pt-4 pb-2 flex flex-col items-start gap-2">
                            <label className="  font-main ">شرح مختصر :</label>
                            <textarea
                                dir="rtl"
                                className=" sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                                type="text"
                                rows="5"
                                placeholder="شرح مختصر"
                                value={briefdesc}
                                onChange={(e) => setBriefDesc(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="sm:w-[100%] sm:h-max sm:flex sm:flex-row  flex-col  items-center justify-center ">
                        <div className=" sm:w-[80%] px-2  pt-4 pb-2 flex flex-col items-start gap-2">
                            <label className="  font-main ">آیا این طرح فاز یا نسخه جدیدی از یک طرح یا محصول قبلی است؟</label>
                            <div className=" justify-between bg-bg-100 gap-14 w-[100%] flex py-6 rounded-3xl ">
                                <button className="  rounded-2xl border border-b-text-100  hover:bg-[#1b9100] hover:text-bg-100 hover:border-bg-100 hover:border font-bold  mx-6 px-24 py-3">بله</button>
                                <button className="  rounded-2xl border border-b-text-100 hover:bg-[#ff0000] hover:text-bg-100 hover:border-bg-100 hover:border font-bold mx-6 px-24 py-3">خیر</button>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-[100%] sm:h-max sm:flex sm:flex-row  flex-col  items-center justify-center ">
                        <div className=" sm:w-[80%] px-2  pt-4 pb-2 flex flex-col items-start gap-2">
                            <label className="  font-main ">اطلاعات مالی :</label>
                            <div className=" justify-center bg-bg-200 flex flex-col   gap-14 w-[100%]  py-8 px-3 rounded-3xl ">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <div className="justify-start items-start flex flex-col px-2">
                                                    <label className="  font-main ">هزینه کل :</label>
                                                    <input
                                                        dir="rtl"
                                                        className=" my-2 sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                                                        type="number"
                                                        placeholder="به تومان"
                                                        value={totcost}
                                                        onChange={(e) => setTotCost(e.target.value)}
                                                    ></input>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="justify-start items-start flex flex-col px-2">
                                                    <label className="  font-main ">زمان کل (به ماه) :</label>
                                                    <input
                                                        dir="rtl"
                                                        className=" my-2 sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                                                        type="number"
                                                        placeholder="ماه"
                                                        value={timemonth}
                                                        onChange={(e) => setTimeMonth(e.target.value)}
                                                    ></input>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div className="justify-start items-start flex flex-col px-2">
                                                    <label className="  font-main ">هزینه تجهیزات :</label>
                                                    <input
                                                        dir="rtl"
                                                        className=" my-2 sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                                                        type="number"
                                                        placeholder="به تومان"
                                                        value={costequipment}
                                                        onChange={(e) => setCostEquipment(e.target.value)}
                                                    ></input>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="justify-start items-start flex flex-col px-2">
                                                    <label className="  font-main ">هزینه تجهیزات مصرفی :</label>
                                                    <input
                                                        dir="rtl"
                                                        className=" my-2 sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                                                        type="number"
                                                        placeholder="به تومان"
                                                        value={consumcost}
                                                        onChange={(e) => setConsumCost(e.target.value)}
                                                    ></input>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div className="justify-start items-start flex flex-col px-2">
                                                    <label className="  font-main ">هزینه نیروی انسانی :</label>
                                                    <input
                                                        dir="rtl"
                                                        className=" my-2 sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                                                        type="number"
                                                        placeholder="به تومان"
                                                        value={humancost}
                                                        onChange={(e) => setHumanCost(e.target.value)}
                                                    ></input>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="justify-start items-start flex flex-col px-2">
                                                    <label className="  font-main ">سایر هزینه ها :</label>
                                                    <input
                                                        dir="rtl"
                                                        className=" my-2 sm:w-[100% ] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                                                        type="number"
                                                        placeholder="به تومان"
                                                        value={othercost}
                                                        onChange={(e) => setOtherCost(e.target.value)}
                                                    ></input>
                                                </div>
                                            </th>
                                        </tr>

                                    </tbody>
                                </table>
                                <div className="sm:w-[100%] sm:h-max sm:flex sm:flex-row  flex-col  items-center justify-center ">
                                    <div className=" sm:w-[80%] px-2  pt-4 pb-2 flex flex-col items-start gap-2">
                                        <label className=" font-bold ">توضیحات :</label>
                                        <textarea
                                            dir="rtl"
                                            className=" sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                                            type="text"
                                            rows="5"
                                            placeholder="توضیحات"
                                            value={description_1}
                                            onChange={(e) => setDescription_1(e.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-[100%] sm:h-max sm:flex sm:flex-row  flex-col  items-center justify-center ">
                        <div className=" sm:w-[80%] px-2  pt-4 pb-2 flex flex-col items-start gap-2">
                            <label className="  font-main ">اطلاعات فروش در سه سال اول تجاری سازی :</label>
                            <div className=" justify-center bg-bg-200 flex flex-col   gap-14 w-[100%]  py-8 px-3 rounded-3xl ">
                                <table>
                                    <tbody>
                                        <tr className="  text-xl justify-start items-start flex">
                                            <th >
                                                اطلاعات فروش
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div className="justify-start items-start flex flex-col px-2">
                                                    <label className=" font-main ">تعداد نسخه یا واحد فروش :</label>
                                                    <input
                                                        dir="rtl"
                                                        className=" my-2 sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                                                        type="number"
                                                        placeholder="تعداد"
                                                        value={soldcostforeign}
                                                        onChange={(e) => setSoldCostForiegn(e.target.value)}
                                                    ></input>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="justify-start items-start flex flex-col px-2">
                                                    <label className="  font-main ">درآمد :</label>
                                                    <input
                                                        dir="rtl"
                                                        className=" my-2 sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                                                        type="number"
                                                        placeholder="به تومان"
                                                        value={incomeforiegn}
                                                        onChange={(e) => setIncomeForeign(e.target.value)}
                                                    ></input>
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
                                                    <input
                                                        dir="rtl"
                                                        className=" my-2 sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                                                        type="number"
                                                        placeholder="تعداد"
                                                        value={soldcostDomestic}
                                                        onChange={(e) => setSoldCostDomestic(e.target.value)}
                                                    ></input>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="justify-start items-start flex flex-col px-2">
                                                    <label className="  font-main ">درآمد :</label>
                                                    <input
                                                        dir="rtl"
                                                        className=" my-2 sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                                                        type="number"
                                                        placeholder="به تومان"
                                                        value={incomedomestic}
                                                        onChange={(e) => setIncomeDomestic(e.target.value)}
                                                    ></input>
                                                </div>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="sm:w-[100%] sm:h-max sm:flex sm:flex-row  flex-col  items-center justify-center ">
                                    <div className=" sm:w-[80%] px-2  pt-4 pb-2 flex flex-col items-start gap-2">
                                        <label className=" font-bold ">توضیحات :</label>
                                        <textarea
                                            dir="rtl"
                                            className=" sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                                            type="text"
                                            rows="5"
                                            placeholder="توضیحات"
                                            value={description_2}
                                            onChange={(e) => setDescription_2(e.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center gap-2">
                        <div className="flex flex-row">
                            <div className="rounded-lg flex h-[200px] gap-6 m-6 flex-col group shadow-lg hover:bg-accent-100 hover:cursor-pointer justify-center bg-bg-100   items-center ">
                                <label
                                    for="dropzone-file"
                                    class="flex flex-col items-center justify-center w-full h-44   rounded-lg cursor-pointer "
                                >
                                    <div className=" group-hover:scale-125 mx-4 my-3 shadow-lg border-opacity-10 group-hover:bg-bg-100 rounded-full p-2 ">
                                        <HiOutlinePlus className=" text-accent-100 " size={40} />
                                    </div>
                                    <span className="mx-4 font-bold text-[20px]  text-accent-200 group-hover:text-bg-100">
                                        اضافه کردن عکس
                                    </span>
                                    <input
                                        id="dropzone-file"
                                        type="file"
                                        class="hidden"
                                        onChange={onChangeFile}
                                    />
                                </label>
                            </div>
                            <div className="rounded-lg flex h-[200px] gap-6 m-6 flex-col group shadow-lg hover:bg-accent-100 hover:cursor-pointer justify-center bg-bg-100   items-center ">
                                <label
                                    for="dropzone-file"
                                    class="flex flex-col items-center justify-center w-full h-44   rounded-lg cursor-pointer "
                                >
                                    <div className=" group-hover:scale-125 mx-4 my-3 shadow-lg border-opacity-10 group-hover:bg-bg-100 rounded-full p-2 ">
                                        <HiOutlinePlus className=" text-accent-100 " size={40} />
                                    </div>
                                    <span className="mx-4 font-bold text-[20px]  text-accent-200 group-hover:text-bg-100">
                                        اضافه کردن ویدیو
                                    </span>
                                    <input
                                        id="dropzone-file"
                                        type="file"
                                        class="hidden"
                                        onChange={onChangeFile}
                                    />
                                </label>
                            </div>
                            <div className="rounded-lg flex h-[200px] gap-6 m-6 flex-col group shadow-lg hover:bg-accent-100 hover:cursor-pointer justify-center bg-bg-100   items-center ">
                                <label
                                    for="dropzone-file"
                                    class="flex flex-col items-center justify-center w-full h-44   rounded-lg cursor-pointer "
                                >
                                    <div className=" group-hover:scale-125 mx-4 my-3 shadow-lg border-opacity-10 group-hover:bg-bg-100 rounded-full p-2 ">
                                        <HiOutlinePlus className=" text-accent-100 " size={40} />
                                    </div>
                                    <span className="mx-4 font-bold text-[20px]  text-accent-200 group-hover:text-bg-100">
                                        اضافه کردن کاور
                                    </span>
                                    <input
                                        id="dropzone-file"
                                        type="file"
                                        class="hidden"
                                        onChange={onChangeFile}
                                    />
                                </label>
                            </div>
                            <div className="rounded-lg flex h-[200px] gap-6 m-6 flex-col group shadow-lg hover:bg-accent-100 hover:cursor-pointer justify-center bg-bg-100   items-center ">
                                <label
                                    for="dropzone-file"
                                    class="flex flex-col items-center justify-center w-full h-44   rounded-lg cursor-pointer "
                                >
                                    <div className=" group-hover:scale-125 mx-4 my-3 shadow-lg border-opacity-10 group-hover:bg-bg-100 rounded-full p-2 ">
                                        <HiOutlinePlus className=" text-accent-100 " size={40} />
                                    </div>
                                    <span className="mx-4 font-bold text-[20px]  text-accent-200 group-hover:text-bg-100">
                                        اضافه کردن پروپوزال
                                    </span>
                                    <input
                                        id="dropzone-file"
                                        type="file"
                                        class="hidden"
                                        onChange={onChangeFile}
                                    />
                                </label>
                            </div>
                        </div>
                        <ul className=" flex flex-col justify-between item-center">
                            {image.map((x) => {
                                return (
                                    <li >
                                        <div className=" px-10 py-10 border-spacing-3 border border-solid  justify-between flex">
                                            <button className="" onClick={() => setImage([])}> delete</button>
                                            <img className="w-[20%]  rounded-2xl" src={URL.createObjectURL(x)} alt="" />
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className=" gap-3 w-[90%] flex flex-col justify-center items-center mt-10">
                        <Accordion allowMultipleExpanded={true}
                            allowZeroExpanded={true}
                            className=" w-[100%] border-collapse"
                            icon={<Icon id={1} open={open} />}
                            open={open === 1}>
                            <AccordionHeader className=" w-full bg-bg-100 hover:border-r-[4px]  p-6 font-black text-accent-200" onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
                            <AccordionBody>
                                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                                ourselves and actualize our dreams.
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            allowMultipleExpanded={true}
                            allowZeroExpanded={true}
                            icon={<Icon id={2} open={open} />}
                            className=" w-[100%] border-collapse"
                            open={open === 2}>
                            <AccordionHeader className=" w-full bg-bg-100 hover:border-r-[4px]  p-6 font-black text-accent-200" onClick={() => handleOpen(2)}>
                                How to use Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody>
                                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                                ourselves and actualize our dreams.
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            allowMultipleExpanded={true}
                            allowZeroExpanded={true}
                            icon={<Icon id={3} open={open} />}
                            className=" w-[100%] border-collapse"
                            open={open === 3}>
                            <AccordionHeader className=" w-full bg-bg-100 hover:border-r-[4px]  p-6 font-black text-accent-200" onClick={() => handleOpen(3)}>
                                What can I do with Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody>
                                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                                ourselves and actualize our dreams.
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            allowMultipleExpanded={true}
                            allowZeroExpanded={true}
                            className=" w-[100%] border-collapse"
                            icon={<Icon id={4} open={open} />}
                            open={open === 4}>
                            <AccordionHeader className=" w-full bg-bg-100 hover:border-r-[4px]  p-6 font-black text-accent-200" onClick={() => handleOpen(4)}>
                                What can I do with Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody>
                                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                                ourselves and actualize our dreams.
                            </AccordionBody>
                        </Accordion>
                    </div>
                    <div className=" py-5 px-5 flex flex-col justify-center items-center ">
                        <button className="" >
                            <div className=" bg-accent-100 hover:bg-primary-100 hover:text-bg-100 hover:font-bold w-[100%] sm:w-[450px] pt-3 pb-3 flex rounded-[8px] flex-col items-center gap-2">
                                <div className="">
                                    <span className="font-main text-[18px]">اضافه کردن</span>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );


};
export default AddIdea;