import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlinePlus } from "react-icons/hi2";
import { MyContext } from "./HomePage";

const AddPopup = () => {
  const [showModal, setShowModal] = useContext(MyContext);

  return (
    <div>
            <div
              onClick={(e) => {
                if (e.target.id === 'myname') {
                  setShowModal(false);
                }
              }}
              id='myname'
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className=" bg-bg-200 rounded-lg flex flex-col  justify-center items-center">
                <div className=" bg-accent-100 w-full h-[80px] "></div>
                <div className=" mt-6 mb-6">
                  <span className=" font-bold text-accent-200 text-[25px]">
                    کدوم ...
                  </span>
                </div>
                <div className=" flex justify-between items-center">
                  {/* add 1 */}
                  <Link to="/AddProblem">
                    <div className="rounded-lg flex h-[200px] gap-6 m-6 flex-col group shadow-lg hover:bg-accent-100 hover:cursor-pointer justify-center bg-bg-100   items-center ">
                      <div className=" group-hover:scale-110 mx-4 shadow-lg group-hover:bg-bg-100 rounded-full p-2 ">
                        <HiOutlinePlus className=" text-accent-100 " size={40} />
                      </div>
                      <span className="mx-4 font-bold text-[20px]  text-accent-200 group-hover:text-bg-100">
                        اضافه کردن مشکل
                      </span>
                    </div>
                  </Link>
                  {/* add 2 */}
                  <Link to="/">
                    <div className=" rounded-lg flex h-[200px] gap-6 m-6 flex-col group shadow-lg hover:bg-accent-100 hover:cursor-pointer justify-center bg-bg-100   items-center ">
                      <div className=" group-hover:scale-110 mx-4 shadow-lg group-hover:bg-bg-100 rounded-full p-2 ">
                        <HiOutlinePlus className="  text-accent-100 " size={40} />
                      </div>
                      <span className="mx-4 font-bold text-[20px] text-accent-200 group-hover:text-bg-100">
                        اضافه کردن ایده{" "}
                      </span>
                    </div>
                  </Link>
                  {/* add 3 */}
                  <Link to="/">
                    <div className=" rounded-lg flex h-[200px] gap-6 m-6 flex-col group shadow-lg hover:bg-accent-100 hover:cursor-pointer justify-center bg-bg-100   items-center ">
                      <div className="group-hover:scale-110 mx-4 shadow-lg group-hover:bg-bg-100 rounded-full p-2 ">
                        <HiOutlinePlus className="   text-accent-100 " size={40} />
                      </div>
                      <span className="mx-4 font-bold text-[20px] text-accent-200 group-hover:text-bg-100 ">
                        اضافه کردن هم پا
                      </span>
                    </div>
                  </Link>
                  {/* end adds */}
                </div>
              </div>
            </div>
              <div className="opacity-40 fixed inset-0 z-40 bg-text-100"></div>
          </div>
  );
};

export default AddPopup;
