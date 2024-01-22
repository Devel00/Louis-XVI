import React, { useEffect, useState, createContext } from "react";
import Navbar from "../Global/Navbar";
import { data } from "../../data/data";
import { Link, useParams, useNavigate } from "react-router-dom";
import { HiOutlinePlus } from "react-icons/hi2";
import Footer from "../Global/Footer";
import Loading from "../Global/Loading";
import Delete from "./DeletePopupF";
// import Card from "./PFundCard";
const MyContext_3 = createContext();

const DetailFoot = () => {
    const [showModal, setShowModal] = useState(false);
    const [funds, setFunds] = useState();
    const { id } = useParams();
    const [foot, setFoot] = useState();
    const [success, setSuccess] = useState(false);
    const [fsuccess, setFSuccess] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [cat, setCat] = useState()
    const [catsuc, setCatSeccuss] = useState(false)
    const [userInfo, setUserInfo] = useState(
        JSON.parse(localStorage.getItem("Info"))
    );
    useEffect(() => {
        const ShowFoot = async () => {
            try {
                const response = await fetch(
                    `https://biglybigly.iran.liara.run/api/v1/foot/foot/${id}/`,
                    {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                        },
                    }
                );
                const result = await response.json();
                console.log(result);
                setFoot(result);
                if (result.creator == userInfo.id) {
                    setShowEdit(true)
                }
                setSuccess(true)
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
            }
        };
        ShowFoot();
    }, [id]);
    useEffect(() => {
        const ShowFoot = async () => {
            try {
                const response = await fetch(
                    `https://biglybigly.iran.liara.run/api/v1/foot/foot-category/${foot.category}/`,
                    {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                        },
                    }
                );
                const result = await response.json();
                console.log(result);
                setCat(result);
                setCatSeccuss(true)
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
            }
        };
        ShowFoot();
    }, [foot]);
    const navigate = useNavigate()
    async function HandelDeleteProblem() {
        setShowModal(true);
    }

    return (
        <MyContext_3.Provider value={[showModal, setShowModal]}>
            <div className="  w-full">
                {showModal && <Delete />}
                <Navbar />
                {(success && catsuc) &&
                    <div className="max-w-[1400px] mx-auto">
                        <div className="pt-[50px] flex justify-center">
                            <img
                                className=" w-[60%]  rounded-lg mt-10 "
                                alt="FootImage"
                                src={`${foot.image}`}
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
                                                    {foot.title}
                                                </div>}
                                        </span>
                                    </div>
                                </div>
                                <div className=" m-12 pt-[10px] flex justify-start items-center gap-7">
                                    <span className=" text-[30px] text-accent-200 font-bold">
                                        دسته بندی :
                                    </span>
                                    <div className=" gap-1 flex flex-col justify-center items-center">
                                        <span className=" text-[30px] text-200 ">
                                            {catsuc &&
                                                <div>
                                                    {cat.category}
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
                                            {foot.description}
                                        </div>}
                                </p>
                            </div>
                        </div>
                        {(showEdit) &&
                            <div className=" py-5 px-5 gap-4 flex flex-row justify-center items-center ">
                                <Link to={id ? `/EditFoot/${id}` : `/`}>
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
                                        <div className="" >
                                            <span className="font-main text-[18px]">پاک کردن</span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        }
                        {/* <div className="  gap-4 flex flex-col justify-center items-center w-[100%] " >
                            {(!showEdit) &&
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
                        </div> */}
                    </div>
                }
                {!(success && catsuc) &&
                    <Loading />
                }
                <Footer />
            </div>
        </MyContext_3.Provider>
    );
};

export { MyContext_3, DetailFoot };
