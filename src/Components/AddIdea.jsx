import React, { useState, createContext, useEffect } from "react";
import { data } from "../data/data";
import { Link, useNavigate } from "react-router-dom";

const AddIdea = () => {
    const [pertitle, setPerTitle] = useState("")
    const [engtitle, setEngTitle] = useState("")
    const [techfield , setTechField] = useState("")
    const [briefdesc, setBriefDesc] = useState("")
    const [mybool, setMybool] = useState("")
    const [totcost, setTotCost] = useState("")
    const [timemonth, setTimeMonth] = useState("")
    const [costequipment , setCostEquipment] = useState("")
    const [consumcost, setConsumCost] = useState("")
    const [humancost, setHumanCost] = useState("")
    const [othercost , setOtherCost] = useState("")
    const [description_1, setDescription_1] = useState("")
    const [soldcostforeign, setSoldCostForiegn] = useState("")
    const [incomeforiegn , setIncomeForeign] = useState("")
    const [soldcostDomestic , setSoldCostDomestic] = useState("")
    const [incomedomestic , setIncomeDomestic] = useState("")
    const [description_2 , setDescription_2] = useState("")
    const [file, setFile] = useState(null)
    const [image, setImage] = useState([])
    // const [description, setDescription] = useState("")
    // const [money, setMoney] = useState("")
    const [userInfo, setUserInfo] = useState(
        JSON.parse(localStorage.getItem("Info"))
    );
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
        // const formdata = new FormData();
        // formdata.append('title', title)
        // formdata.append('description', description)
        // formdata.append('financial_amount', money)
        // formdata.append('main_image', image[0])
        // formdata.append('is_done', false)
        // formdata.append('creator', userInfo.id)
        // for (var pair of formdata.entries()) {
        //     console.log(pair[0] + ': ' + pair[1]);
        // }
        // await fetch("https://biglybigly.iran.liara.run/api/v1/problems/problems/", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //     },
        //     body: formdata,
        // })
        //     .then(() => {
        //         navigate("/Profile");
        //         console.log("sucess");
        //     })
        //     .catch((e) => { console.log(e); })
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
                                placeholder="عنوان انگلیسی"
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
                        <div className="w-[78%] h-full flex items-starts gap-2">
                            <label className="font-main">بارگذاری عکس :</label>
                        </div>
                        <div class="flex font-main items-center sm:flex-col justify-center w-[70%]">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-main font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input
                                    id="dropzone-file"
                                    type="file"
                                    class="hidden"
                                    onChange={onChangeFile}
                                />
                            </label>
                        </div>
                        <ul>
                            fdsfdsfs
                            {image.map(x => { return <li> <img src={URL.createObjectURL(x)} alt="" /></li> })
                            }
                        </ul>
                    </div>
                    <div className=" py-5 px-5 flex flex-col justify-center items-center ">
                        <button className="" onClick={handelCreateProblem}>
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