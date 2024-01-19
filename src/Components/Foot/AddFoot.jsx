import React, { useState, createContext, useEffect } from "react";
import { data } from "../../data/data";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlinePlus } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

const AddFoot = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [image, setImage] = useState([]);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [userInfo, setUserInfo] = useState(
        JSON.parse(localStorage.getItem("Info"))
    );
    const onChangeFile = (e) => {
        setImage([e.target.files[0]]);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onDeleteImage = (index) => {
        // Create a new array excluding the element at the specified index
        const updatedImages = image.filter((_, i) => i !== index);
        setImage(updatedImages);
    };
    const navigate = useNavigate(); //why???
    async function handelCreateProblem() {
        const formdata = new FormData();
        formdata.append("title", title);
        formdata.append("description", description);
        formdata.append("category", category);
        formdata.append("main_image", image[0]);
        formdata.append("is_done", false);
        formdata.append("creator", userInfo.id);
        for (var pair of formdata.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }
        await fetch("https://biglybigly.iran.liara.run/api/v1/problems/problems/", {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: formdata,
        })
            .then(() => {
                navigate("/Profile");
                console.log("sucess");
            })
            .catch((e) => {
                console.log(e);
            });
    }

    return (
        <div class="flex items-center justify-center p-5">
            <div className="w-[55%] h-[100%] rounded-sm  flex flex-col items-center justify-center z-30 bg-primary-200 bg-opacity-60 shadow-[-18px_10px_80px_-5px_rgba(5,5,5,0.3)] shadow-text-200/60">
                <div className="w-full flex justify-center items-center p-2 bg-primary-300 rounded-sm">
                    <img className=" w-20" src={data[1].image} alt=""></img>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center gap-1">
                    <div className="sm:w-[100%] sm:flex sm:flex-row  flex-col  items-center justify-center ">
                        <div className=" sm:w-[80%] px-2  pt-4 pb-2 flex flex-col items-start gap-2">
                            <label className="  font-main ">عنوان مسیر :</label>
                            <input
                                dir="rtl"
                                className=" sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                                type="text"
                                placeholder="عنوان"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div className="sm:w-[100%] sm:h-max sm:flex sm:flex-row  flex-col  items-center justify-center ">
                        <div className=" sm:w-[80%] px-2  pt-4 pb-2 flex flex-col items-start gap-2">
                            <label className="  font-main ">توضیح بیشتر :</label>
                            <textarea
                                dir="rtl"
                                className=" sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                                type="text"
                                rows="5"
                                placeholder="توضیح"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="sm:w-[100%] sm:h-max sm:flex sm:flex-row  flex-col  items-center justify-center ">
                        <div className=" sm:w-[80%] px-2  pt-4 pb-2 flex flex-col items-start gap-2">
                            <label >
                                دسته بندی :
                            </label>
                            <select onChange={(e) => {setCategory(e.target.value)}} class="block appearance-auto w-full border py-3 px-2 pr-2 pe-2 rounded leading-tight">
                                <option value={0} selected>یک مورد را انتخاب کنید</option>
                                <option value={1}>New Mexico</option>
                                <option value={2}>Missouri</option>
                                <option value={3}>Texas</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center gap-2">
                        <div className="w-[78%] h-full flex items-starts gap-2">

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
export default AddFoot;