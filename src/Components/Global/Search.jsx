import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PCard from "../Problem/PCard";
import FCard from "../Foot/FCard";
import { CiCirclePlus } from "react-icons/ci";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Blank from "../Idea/BlankPage";

const Search = () => {
    const [userInfo, setUserInfo] = useState(
        JSON.parse(localStorage.getItem("Info"))
    );
    console.log(userInfo.id)
    const [problems, setProblems] = useState([]);
    const [foots, setFoots] = useState([]);
    const [Idea, setIdea] = useState([]);
    const [psuccess, setPSuccess] = useState(false);
    const [fsuccess, setFSuccess] = useState(false);
    const [isuccess, setISuccess] = useState(false)
    const { id } = useParams();
    let i = 0;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // console.log(localStorage.getItem("token"))
    useEffect(() => {
        const ShowProblems = async () => {
            try {
                setPSuccess(false)
                setProblems([])
                const response = await fetch(
                    `https://biglybigly.iran.liara.run/api/v1/problems/problems/?search=${id}`,
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
                setProblems(result);
                setPSuccess(true);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
            }
        };
        ShowProblems();
    }, [id]);
    useEffect(() => {
        const ShowFoots = async () => {
            try {
                setFSuccess(false)
                setFoots([])
                const response = await fetch(
                    `https://biglybigly.iran.liara.run/api/v1/foot/foot/?search=${id}`,
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
                setFoots(result);
                setFSuccess(true);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
            }
        };
        ShowFoots();
    }, [id]);
    return (
        <div className="">
            <Navbar />
            <div className=" py-10 flex flex-col justify-center items-center ">
                <span className="text-[30px] py-4 text-accent-200 font-bold items-start">مشکلات</span>
                <div className=" bg-bg-200 h-[1.5px] w-[80%] " />
            </div>
            <div>
                {psuccess &&
                    <div >

                        <div className=" scale-90 mt-4 grid grid-cols-3 gap-y-4 m-4 animate-fade-up">
                            {psuccess && problems.map((item, index) => (
                                <PCard detail={item} />
                            ))
                            }
                        </div>
                        {(problems.length == 0) &&
                            <Blank />
                        }
                    </div>
                }
                {!psuccess &&

                    <Loading />
                }
            </div>
            <div className="py-10 flex flex-col justify-center items-center ">
                <span className="text-[30px] py-4 text-accent-200 font-bold items-start">هم مسیر</span>
                <div className=" bg-bg-200 h-[1.5px] w-[80%] " />
            </div>
            <div>
                {fsuccess &&
                    <div className=" scale-90 mt-4 grid grid-cols-3 gap-y-4 m-4 animate-fade-up">
                        {fsuccess && foots.map((item, index) => (
                            <div >
                                <FCard detail={item} />
                            </div>
                        ))
                        }
                    </div>
                }
                {!fsuccess &&
                    <Loading />
                }
            </div>
            <div className=" bottom-0">
                <Footer />
            </div>
        </div>
    );
};

export default Search;
