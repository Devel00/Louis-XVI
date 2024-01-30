import React, { useState, useEffect } from "react";
import Footer from "../Global/Footer";
import Navbar from "../Global/Navbar";
import Card from "./FundCardW";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import Loading from "../Global/Loading";

const ManageFund = () => {
    const [userInfo, setUserInfo] = useState(
        JSON.parse(localStorage.getItem("Info"))
    );
    console.log(userInfo.id)
    const [problems, setProblems] = useState([]);
    const [success, setSuccess] = useState(false);
    let i = 0;
    // console.log(localStorage.getItem("token"))
    useEffect(() => {
        const ShowProblems = async () => {
            try {
                const response = await fetch(
                    `https://biglybigly.iran.liara.run/api/v1/problems/fund/`,
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
                if (response.status == 200) {
                    // console.log(result1)
                    let myarray = []
                    result.forEach(object => {
                        console.log(object.user)
                        if (object.user === Number(userInfo.id)) {
                            console.log(object)  // Log the specific object
                            myarray.push(object)  // Assuming funds is your state variable
                        }
                    }
                    )
                    setProblems(myarray)
                    console.log(myarray)
                }
                else {
                    setProblems([])
                }
                setSuccess(true)
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
                    <div className=" scale-90 m-7  grid grid-cols-3 justify-center items-center gap-y-6 gap-x-6 animate-fade-up">

                        {success && problems.map((item, index) => (
                            <div >
                                <Card detail={item} />
                            </div>
                        ))
                        }
                    </div>
                }
                {!success &&

                    <Loading />
                }
            </div>
            <div className="bottom-0 absolute">
            <Footer />
            </div>
        </div>
    );
};

export default ManageFund;
