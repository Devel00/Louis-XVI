import React, { useState, useEffect } from "react";
import { data } from "../../data/data";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineVolunteerActivism } from "react-icons/md";


const FundCard = ({ detail }) => {
    const [Detail, setDetail] = useState(detail);
    const [user, setUser] = useState()
    const [success, setSuccess] = useState(false)
    useEffect(() => {
        const ShowUser = async () => {
            try {
                const response = await fetch(
                    `https://biglybigly.iran.liara.run/api/v1/user/${Detail.user}/`,
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
                setUser(result);
                setSuccess(true);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
            }
        };
        ShowUser();
    }, [Detail.user]);
    return (
        <div
            className={`w-full h-[200px] bg-bg-300/40 hover:bg-bg-300/70 rounded-[24px] shadow-xl flex flex-col  justify-center items-center`}>
            {success &&
                <div className=" flex flex-col justify-center items-center">
                    <img
                        className="w-[60%] mt-7"
                        src={data[9].image}
                        alt=""
                    ></img>
                    <div className="px-6 py-4">
                        <div className=" font-main font-bold mb-2">{user.first_name} {user.last_name}</div>
                        <div className=" font-main font-bold mb-2">{Detail.amount}</div>
                        <div className="flex justify-between mt-5 gap-5" >
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default FundCard;
