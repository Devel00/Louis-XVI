import React, { useState, createContext } from "react";
import { data } from "../data/data";
import { Link, useNavigate } from "react-router-dom";

const AddProblem = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState([]);
  const [image, setImage] = useState([]);
  const [description, setDescription] = useState("");
  const [money, setMoney] = useState("");
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("Info"))
  );
  const onChangeFile = (e) => {
    setImage(image, e.target.files[0]);
    file = {
      id: 0,
      image: image[0],
      problem_id: 1,
    };
    setFile([file, e.target.files[0]]);
    console.log("file : ", file);
  };
  const navigate = useNavigate(); //why????
  async function handelCreateProblem() {
    let Problems = {
      title: title,
      description: description,
      financial_amount: money,
      // problem_images:file ,
      is_done: false,
      creator: userInfo.id,
    };
    console.log(Problems);
    await fetch("https://biglybigly.iran.liara.run/api/v1/problems/problems/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Problems),
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
              <label className="  font-main ">عنوان مشکل :</label>
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
              <label className="  font-main ">
                تخمین پول مورد نیاز برای حل مشکل :
              </label>
              <input
                dir="rtl"
                className=" sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                type="number"
                rows="5"
                placeholder="به تومان"
                value={money}
                onChange={(e) => setMoney(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center gap-2">
            <div className="w-[78%] h-full flex items-starts gap-2">
              <label className="font-main">بارگذاری عکس :</label>
            </div>
            <div class="flex font-main items-center sm:flex-col justify-center w-[70%]">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-main font-semibold">Click to upload</span>{" "}
                    or drag and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  onChange={onChangeFile}
                />
              </label>
            </div>
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
export default AddProblem;
