import React, { useContext, useState } from "react";
import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { MyContext } from "./Profile";
import { data } from "../../data/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Increase = () => {
  const [showModal, setShowModal] = useContext(MyContext);
  const [balance, setBalance] = useState();
  const navigate = useNavigate();
  async function handleUpdate() {
    let update = {
      add_balance: balance,
    };
    console.log(balance);

    if (parseInt(balance, 10) < 0) {
      setTimeout(() => {
        toast.error("مقدار وارد شده صحیح نیست");
      }, 1000);
    } else {
      await fetch("https://biglybigly.iran.liara.run/api/v1/user/balance", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(update),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json.data);
          navigate("/Factor");
        })
        .catch((e) => {
          console.log("login erorr ==>>> ", e);
        });
    }
  }
  return (
    <div>
      <ToastContainer
        className="font-bold"
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        bodyClassName={() => " font-main flex justify-between items-center"}
      />
      <div
        onClick={(e) => {
          if (e.target.id === "myname") {
            setShowModal(false);
          }
        }}
        id="myname"
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className=" bg-bg-200 rounded-lg w-[45%] shadow-lg flex flex-col justify-center items-center">
          <div className=" bg-accent-100 w-full h-[80px] "></div>
          <div className=" flex flex-col items-start justify-center mt-6 ">
            <span className=" text-text-100 text-[16px] pr-2 font-semibold mb-1">
              میزان افزایش :
            </span>
            <input
              onChange={(e) => setBalance(e.target.value)}
              className=" shadow-md border border-bg-300/50 mb-10 rounded-[8px] mt-1 text-text-100 py-2 px-6 w-[400px] "
              type="text"
            ></input>
          </div>

          <button
            onClick={handleUpdate}
            className=" mt-6 mb-10 w-[400px] py-2 px-4 rounded-[8px] bg-accent-100 text-bg-100 font-semibold "
          >
            افزایش
          </button>
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-40 bg-text-100"></div>
    </div>
  );
};

export default Increase;
