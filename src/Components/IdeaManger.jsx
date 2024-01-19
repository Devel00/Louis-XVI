import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Card from "./IdeaCard";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const ManageIdea = () => {
    const [userInfo, setUserInfo] = useState(
        JSON.parse(localStorage.getItem("Info"))
    );
    console.log(userInfo.id)
    const [ideas, setIdeas] = useState();
    const [success, setSuccess] = useState(false);
    let i = 0;
    // console.log(localStorage.getItem("token"))
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        const ShowProblems = async () => {
            try {
                const response = await fetch(
                    `https://biglybigly.iran.liara.run/api/v1/idea/user-ideas/`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                            Authorization: `${localStorage.getItem("token")}`,
                        },
                    }
                );
                const result = await response.json();
                console.log(result);
                setIdeas(result);
                setSuccess(true);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
            }
        };
        ShowProblems();
    }, [userInfo.id]);
    return (
        <div className="">
            <Navbar />
            <div>
                {success &&
                    <div className="w-full m-3 flex flex-col gap-y-6 justify-center items-center animate-fade-up">
                        {success && ideas.map((item, index) => (
                            <div className=" w-full justify-center items-center">
                                <Card detail={item} />
                            </div>
                        ))

                        }
                        <Link to="/AddIdea">
                            <div className="w-[450px] h-[450px] bg-bg-200 hover:bg-bg-300/70 rounded-[24px]  overflow-hidden shadow-xl flex flex-col  justify-center items-center">
                                <CiCirclePlus className=" text-primary-100" size={90} />
                                <div className=" font-main font-bold mb-2">
                                    اضافه كردن كارت ایده
                                </div>
                            </div>
                        </Link>
                    </div>
                }
                {!success &&

                    <Loading />
                }
            </div>
            <Footer/>
        </div>
    );
};

export default ManageIdea;
