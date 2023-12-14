import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlinePlus } from "react-icons/hi2";
import { MyContext } from "./HomePage";

const AddPopup = () => {
  const [popup, setPopup] = useContext(MyContext);

  return (
    <div className=" flex fixed h-full w-full z-50 bg-text-100/30  flex-col justify-center items-center">
      <div className=" fixed inset-10 top-[80px] right-[10%] hover:cursor-pointer  w-[80%] z-50 bg-bg-200 h-[600px]">
        <div className=" hover:scale-105 absolute   right-1 top-1 p-4">
          <AiOutlineClose
            onClick={() => setPopup(false)}
            size={35}
            className="   shadow-md p-1 rounded-full  bg-bg-100  cursor-pointer text-primary-100"
          />
        </div>
        <div className=" flex flex-col  justify-center items-center">
          <div className=" shadow-lg flex flex-col w-[50%]  mt-16 mb-10  justify-center items-center">
            <div className=" bg-accent-100 w-full h-[80px] "></div>
            <div className=" mt-6 mb-6">
              <span className=" font-bold text-accent-200 text-[25px]">
                کدوم ...
              </span>
            </div>
            <div className=" flex justify-between items-center">
              {/* add 1 */}
              <Link to="/AddProblem">
                <div className=" flex h-[200px] gap-6 m-6 flex-col group shadow-lg hover:bg-accent-100 hover:cursor-pointer justify-center bg-bg-100   items-center ">
                  <div className=" group-hover:scale-110 mx-4 shadow-lg group-hover:bg-bg-100 rounded-full p-2 ">
                    <HiOutlinePlus className="  text-accent-100 " size={40} />
                  </div>
                  <span className="mx-4 font-bold text-[20px] group-hover:text-bg-100 text-bg-300">
                    اضافه کردن مشکل
                  </span>
                </div>
              </Link>
              {/* add 2 */}
              <Link to="/">
                <div className=" flex h-[200px] gap-6 m-6 flex-col group shadow-lg hover:bg-accent-100 hover:cursor-pointer justify-center bg-bg-100   items-center ">
                  <div className=" group-hover:scale-110 mx-4 shadow-lg group-hover:bg-bg-100 rounded-full p-2 ">
                    <HiOutlinePlus className="  text-accent-100 " size={40} />
                  </div>
                  <span className="mx-4 font-bold text-[20px] group-hover:text-bg-100 text-bg-300">
                    اضافه کردن ایده{" "}
                  </span>
                </div>
              </Link>
              {/* add 3 */}
              <Link to="/">
                <div className=" flex h-[200px] gap-6 m-6 flex-col group shadow-lg hover:bg-accent-100 hover:cursor-pointer justify-center bg-bg-100   items-center ">
                  <div className="group-hover:scale-110 mx-4 shadow-lg group-hover:bg-bg-100 rounded-full p-2 ">
                    <HiOutlinePlus className="   text-accent-100 " size={40} />
                  </div>
                  <span className="mx-4 font-bold text-[20px] group-hover:text-bg-100 text-bg-300">
                    اضافه کردن هم پا
                  </span>
                </div>
              </Link>
              {/* end adds */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPopup;
