import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlinePlus } from "react-icons/hi2";
import { MyContext_2 } from "./IdeaDetail";
import { Link,useParams,  useNavigate } from "react-router-dom";

const DeletePopup = () => {
    const [showModal, setShowModal] = useContext(MyContext_2);
    const {id} = useParams()
    const navigate = useNavigate()
    const HandelDelete =async () =>
    {
        await fetch(`https://biglybigly.iran.liara.run/api/v1/idea/idea/${id}/`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                Authorization: `${localStorage.getItem("token")}`,
            },
        })
            .then(() => {
                navigate("/IdeaManager");
                console.log("sucess");
            })
            .catch((e) => {
                console.log(e);
            });
    }
    const HandelNo = () =>
    {
        setShowModal(false)
    }
    return (
        <div>
            <div
                onClick={(e) => {
                    if (e.target.id === 'myname') {
                        setShowModal(false);
                    }
                }}
                id='myname'
                className="justify-center animate-fade-up animate-duration-150 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className=" bg-bg-200 rounded-lg flex flex-col  justify-center items-center">
                    <div className=" bg-accent-100 w-full h-[80px] "></div>
                    <div className=" mt-6 mb-6">
                        <span className=" font-bold text-accent-200 text-[25px]">
                            آیا از پاک کردن این ایده اطمینان دارید؟
                        </span>
                    </div>
                    <div className=" flex justify-between items-center">
                        {/* add 1 */}
                        <div className="flex flex-row items-center justify-between gap-16">
                            <button onClick={HandelDelete} className=" bg-accent-100 hover:bg-primary-100 hover:text-bg-100 hover:font-bold w-60  m-4 pt-3 pb-3 flex rounded-[8px] flex-col items-center gap-2">
                                بله
                            </button>
                            <button onClick={HandelNo} className=" bg-accent-100 hover:bg-primary-100 hover:text-bg-100 hover:font-bold w-60 m-4 pt-3 pb-3 flex rounded-[8px] flex-col items-center gap-2">
                                خیر
                            </button>
                        </div>
                        {/* end adds */}
                    </div>
                </div>
            </div>
            <div className="opacity-40 fixed inset-0 z-40 bg-text-100"></div>
        </div>
    );
};
export default DeletePopup;
