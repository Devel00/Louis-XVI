import React, { useEffect, useState, createContext } from "react";
import Navbar from "../Global/Navbar";
import { Link, useParams, useNavigate } from "react-router-dom";
import { HiOutlinePlus } from "react-icons/hi2";
import Footer from "../Global/Footer";
import Loading from "../Global/Loading";
import Delete from "./DeletePopupP";
import Card from "./PFundCard";
import defaultImage from '../../Image/default_problem.jpg'
import { ToastContainer, toast } from "react-toastify";


const MyContext_1 = createContext();

const ProblemDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const [funds, setFunds] = useState([]);
  const { id } = useParams();
  const [problems, setProblems] = useState();
  const [success, setSuccess] = useState(false);
  const [fsuccess, setFSuccess] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("Info"))
  );
  const [amount, setAmount] = useState()
  const [cat, setCat] = useState()
  const [catsuc, setCatSeccuss] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // console.log(id)
  // console.log(localStorage.getItem("token"))
  useEffect(() => {
    const ShowProblems = async () => {
      const response = await fetch(
        `https://biglybigly.iran.liara.run/api/v1/problems/problems/${id}/`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      const result = await response.json();
      console.log(result);
      setProblems(result);

      if (result.creator.id == userInfo.id) {
        setShowEdit(true)
        setSuccess(true)
      }
      setFSuccess(false)
      const response1 = await fetch(
        `https://biglybigly.iran.liara.run/api/v1/problems/fund/?problem=${id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      const result1 = await response1.json();
      if (result1.status = 200) {
        setFunds(result1)
        console.log(result)
        setFSuccess(true)
      }
      else {
        setFunds([])
      }
      setFSuccess(true);
      setSuccess(true)
    }
    ShowProblems();
  }, [id]);

  async function HandelDeleteProblem() {
    setShowModal(true);
  }

  async function HandelVolanteer() {
    // setFSuccess(false)
    const formdata = new FormData();
    formdata.append("problem", parseInt(id));
    formdata.append("amount", parseInt(amount));
    // formdata.append("user", userInfo.id);

    await fetch(`https://biglybigly.iran.liara.run/api/v1/problems/fund/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
      body: formdata,
    })
      .then(async () => {
        try {
          setFSuccess(false)
          const response = await fetch(
            `https://biglybigly.iran.liara.run/api/v1/problems/fund/?problem=${id}`,
            {
              method: "GET",
              headers: {
                Accept: "application/json",
              },
            }
          );
          const result = await response.json();
          setFunds(result)
          console.log(result)
          setFSuccess(true)
        }
        catch(e) {
          console.log('error: ', e)
        }
        finally {
          const problem = await fetch(
            `https://biglybigly.iran.liara.run/api/v1/problems/problems/${id}/`,
            {
              method: "GET",
              headers: {
                Accept: "application/json",
              },
            }
          )
          const result = await problem.json();
          console.log(result);
          setProblems(result);
        }
      })
  }


  return (
    <MyContext_1.Provider value={[showModal, setShowModal]}>
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
      <div className="w-full">
        {showModal && <Delete />}
        <Navbar />
        {success &&
          <div className="max-w-[1400px] mx-auto pb-8">
            <div className="pt-[50px] flex justify-center w-50 y-50">
              <img
                className="max-h-64 w-auto rounded-lg mt-5"
                alt="ProblemImage"
                src={problems.main_image ? `https://biglybigly.iran.liara.run/${problems.main_image}` : defaultImage}
              />
            </div>
            <div className="pt-[50px] flex justify-center">
              <div className=" w-[60%] mb-10 pb-10 mt-10 flex flex-col justify-center items-start bg-bg-200/50 shadow-md">
                <div className=" m-12 pt-[10px] flex justify-start items-center gap-7">
                  <span className=" text-[30px] text-accent-200 font-bold">
                    عنوان:
                  </span>
                  <div className=" gap-1 flex flex-col justify-center items-center">
                    <span className=" text-[30px] text-200 ">
                      {success &&
                        <div>
                          {problems.title}
                        </div>}
                    </span>
                  </div>
                </div>
                <div className=" m-12 pt-[10px] flex justify-start items-center gap-7">
                  <span className=" text-[30px] text-accent-200 font-bold">
                    سرمایه مورد نیاز :
                  </span>
                  <div className=" gap-1 flex flex-col justify-center items-center">
                    <span className=" text-[30px] text-200 ">
                      {success &&
                        <div>
                          {problems.financial_amount} تومان
                        </div>}
                    </span>
                  </div>
                </div>
                <div className=" m-12 pt-[10px] flex justify-start items-center gap-7">
                  <span className=" text-[30px] text-accent-200 font-bold">
                    سرمایه جمع شده :
                  </span>
                  <div className=" gap-1 flex flex-col justify-center items-center">
                    <span className=" text-[30px] text-200 ">
                      {success &&
                        <div>
                          {problems.funded_amount || 0} تومان
                        </div>}
                    </span>
                  </div>
                </div>
                <div className=" m-12 pt-[10px] flex justify-start items-center gap-7">
                  <span className=" text-[30px] text-accent-200 font-bold">
                    دسته بندی :
                  </span>
                  <div className=" gap-1 flex flex-col justify-center items-center">
                    <span className=" text-[30px] text-200 ">
                        <div>
                          {problems.problem_category}
                        </div>
                    </span>
                  </div>
                </div>
                <div className=" mr-12 mt-12 mb-6 flex justify-start items-center gap-7">
                  <span className=" text-[30px] text-accent-200 font-bold">
                    شرح مختصر :{" "}
                  </span>
                </div>
                <p className=" mr-12 ml-12 text-[30px] text-justify text-200">
                  {success &&
                    <div>
                      {problems.description}
                    </div>}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-[60%] grid grid-cols-5 gap-2">
                {fsuccess && (funds.length != 0) && funds.map((item, index) => (
                  <div className=" w-full justify-center items-center">
                    <Card detail={item} />
                  </div>
                ))
                }
              </div>
              {!fsuccess &&
                <Loading />
              }
            </div>
            {(showEdit) &&
              <div className=" py-5 px-5 gap-4 flex flex-row justify-center items-center ">
                <Link to={id ? `/EditProblem/${id}` : `/`}>
                  <button className="" >
                    <div className=" bg-accent-100 hover:bg-primary-100 hover:text-bg-100 hover:font-bold w-[100%] sm:w-[450px] pt-3 pb-3 flex rounded-[8px] flex-col items-center gap-2">
                      <div className="">
                        <span className="font-main text-[18px]">ویرایش اطلاعات</span>
                      </div>
                    </div>
                  </button>
                </Link>
                <button className="" onClick={HandelDeleteProblem} >
                  <div className=" bg-accent-100 hover:bg-primary-100 hover:text-bg-100 hover:font-bold w-[100%] sm:w-[450px] pt-3 pb-3 flex rounded-[8px] flex-col items-center gap-2">
                    <div className="" >
                      <span className="font-main text-[18px]">پاک کردن</span>
                    </div>
                  </div>
                </button>
              </div>
            }
            <div className="  gap-4 flex flex-col justify-center items-center w-[100%] " >
              {(!showEdit) &&
                <div className="  gap-4 flex flex-col justify-center items-center w-[50%] ">
                  <div className=" sm:w-[80%] px-2  pt-4 pb-2 flex flex-col items-start gap-2">
                    <label className=" font-bold font-main ">
                      میزان مشارکت برای حل مشکل :
                    </label>
                    <input
                      dir="rtl"
                      className=" sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                      type="number"
                      placeholder="به تومان"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    ></input>
                  </div>
                  <button className="" onClick={HandelVolanteer} >
                    <div className=" bg-accent-100 hover:bg-primary-100 hover:text-bg-100 hover:font-bold w-[100%] sm:w-[450px] pt-3 pb-3 flex rounded-[8px] flex-col items-center gap-2">
                      <div className="">
                        <span className="font-main text-[18px]">مشارکت کردن</span>
                      </div>
                    </div>
                  </button>
                </div>
              }
            </div>
          </div>
        }
        {!success &&
          <Loading />
        }
        <problemer />
      </div>
    </MyContext_1.Provider>
  );
};

export { MyContext_1, ProblemDetail };
