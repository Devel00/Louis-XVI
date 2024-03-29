import React, { useState, useEffect } from "react";
import { data } from "../../data/data";
import { Link, useNavigate, useResolvedPath } from "react-router-dom";
import { useParams } from "react-router-dom";
import { HiOutlinePlus } from "react-icons/hi2";
import Loading from "../Global/Loading";

const EditUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newPasword_1, setNewPassword_1] = useState("");
  const [newPasword_2, setNewPassword_2] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [Password, setPassword] = useState("");
  const [confirm, setConfirm] = useState(true);
  const [user, setUser] = useState();
  const [image, setImage] = useState([]);
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("Info"))
  );
  const { id } = useParams();
  const [success, setSuccess] = useState(false);
  const [setimage, setSetImage] = useState(false);
  const [send, setSend] = useState(false);
  const onChangeFile = (e) => {
    setSetImage(false);
    setImage([e.target.files[0]]);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const onDeleteImage = (index) => {
    const updatedImages = image.filter((_, i) => i !== index);
    setImage(updatedImages);
  };
  const navigate = useNavigate();
  async function handelUpdateUser() {
    if (confirm) {
      const formdata = new FormData();
      // formdata.append("title", title);
      // formdata.append("description", description);
      // formdata.append("financial_amount", money);
      // formdata.append("main_image", image[0]);
      // formdata.append("is_done", false);
      // formdata.append("creator", userInfo.id);
      formdata.append("first_name", firstName);
      formdata.append("last_name", lastName);
      formdata.append("phone_number", phonenumber);
      if (newPasword_1 != "") {
        formdata.append("password", newPasword_1);
      }
      setSend(true);
      const response = await fetch(
        `https://biglybigly.iran.liara.run/api/v1/user/${userInfo.id}/`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            Authorization: `${localStorage.getItem("token")}`,
          },
          body: formdata,
        }
      );
      if (response.status == 200) {
        navigate("/Profile");
      } else {
      }
    }
  }
  useEffect(() => {
    const ShowUser = async () => {
      try {
        const response = await fetch(
          `https://biglybigly.iran.liara.run/api/v1/user/${userInfo.id}/`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
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
  }, [id]);
  useEffect(() => {
    const checkPass = () => {
      if (newPasword_1 == newPasword_2) {
        setConfirm(true);
      } else {
        setConfirm(false);
      }
    };
    checkPass();
  }, [newPasword_2]);
  useEffect(() => {
    const SetDefaultValues = () => {
      if (success) {
        setFirstName(user.first_name);
        setLastName(user.last_name);
        setPhoneNumber(user.phone_number);
        // console.log(user.password)
        // setDescription(problems.description);
        // setMoney(problems.financial_amount)
        // setSetImage(true)
        // setImage([`https://biglybigly.iran.liara.run/${problems.main_image}`])
      }
    };
    SetDefaultValues();
  }, [user]);

  return (
    <div class="flex items-center justify-center p-5">
      {success && (
        <div className="w-[55%] h-[100%] rounded-sm  flex flex-col items-center justify-center z-30 bg-primary-200 bg-opacity-60 shadow-[-18px_10px_80px_-5px_rgba(5,5,5,0.3)] shadow-text-200/60">
          <div className="w-full flex justify-center items-center p-2 bg-primary-300 rounded-sm">
            <img className=" w-20" src={data[1].image} alt=""></img>
          </div>
          <div className="w-full h-full  justify-center items-center gap-1">
            <div className=" grid grid-cols-2 w-full h-full  justify-center items-center gap-1">
              <div className="sm:w-[100%] sm:flex sm:flex-row  flex-col  items-center justify-center ">
                <div className=" sm:w-[80%]  pt-4 pb-2 flex flex-col items-start gap-2">
                  <label className="  font-main ">نام :</label>
                  <input
                    dir="rtl"
                    className=" sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                    type="text"
                    placeholder="نام"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="sm:w-[100%] sm:flex sm:flex-row  flex-col  items-center justify-center ">
                <div className=" sm:w-[80%] pt-4 pb-2 flex flex-col items-start gap-2">
                  <label className="  font-main ">نام خانوادگی :</label>
                  <input
                    dir="rtl"
                    className=" sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                    type="text"
                    placeholder="نام خانوادگی"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="sm:w-[100%] sm:flex sm:flex-row  flex-col  items-center justify-center ">
                <div className=" sm:w-[80%]  pt-4 pb-2 flex flex-col items-start gap-2">
                  <label className="  font-main ">شماره تلفن :</label>
                  <input
                    dir="rtl"
                    className=" sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                    type="text"
                    placeholder="شماره تلفن"
                    value={phonenumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="sm:w-[100%] sm:flex sm:flex-row  flex-col  items-center justify-center ">
                <div className=" sm:w-[80%]  pt-4 pb-2 flex flex-col items-start gap-2">
                  <label className="  font-main ">رمز عبور :</label>
                  <input
                    dir="rtl"
                    className=" sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                    type="password"
                    placeholder="رمز عبور"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="sm:w-[100%] sm:flex sm:flex-row  flex-col  items-center justify-center ">
                <div className=" sm:w-[80%]  pt-4 pb-2 flex flex-col items-start gap-2">
                  <label className="  font-main ">رمز عبور جدید :</label>
                  <input
                    dir="rtl"
                    className=" sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                    type="password"
                    placeholder="رمز عبور جدید"
                    value={newPasword_1}
                    onChange={(e) => setNewPassword_1(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="sm:w-[100%] sm:flex sm:flex-row  flex-col  items-center justify-center ">
                <div className=" sm:w-[80%]  pt-4 pb-2 flex flex-col items-start gap-2">
                  <label className="  font-main ">تایید رمز عبور جدید :</label>
                  <input
                    dir="rtl"
                    className=" sm:w-[100%] px-2 font-main font-normal placeholder:text-[15px] placeholder:text-bg-300 text-[20px] rounded-[8px] py-2 border border-bg-200 shadow-md "
                    type="password"
                    placeholder="تایید رمز عبور جدید :"
                    value={newPasword_2}
                    onChange={(e) => setNewPassword_2(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center gap-2">
              <div className="w-[78%] h-full flex items-starts gap-2"></div>
              {/* <div className="rounded-lg flex h-[200px] gap-6 m-6 flex-col group shadow-lg hover:bg-accent-100 hover:cursor-pointer justify-center bg-bg-100   items-center ">
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
                                            {setimage &&
                                                <div className=" px-10 py-10 border-spacing-3 border border-solid  justify-between flex">
                                                    <button className="" onClick={() => setImage([])}> delete</button>
                                                    <img className="w-[20%]  rounded-2xl" src={x} alt="" />
                                                </div>
                                            }
                                            {!setimage &&
                                                <div className=" px-10 py-10 border-spacing-3 border border-solid  justify-between flex">
                                                    <button className="" onClick={() => setImage([])}> delete</button>
                                                    <img className="w-[20%]  rounded-2xl" src={URL.createObjectURL(x)} alt="" />
                                                </div>
                                            }
                                        </li>
                                    );
                                })}
                            </ul> */}
            </div>
            <div className=" py-5 px-5 flex flex-col justify-center items-center ">
              <button className="" onClick={handelUpdateUser}>
                <div className=" bg-accent-100 hover:bg-primary-100 hover:text-bg-100 hover:font-bold w-[100%] sm:w-[450px] pt-3 pb-3 flex rounded-[8px] flex-col items-center gap-2">
                  <div className="">
                    <span className="font-main text-[18px]">
                      ویرایش اطلاعات
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
      {!success && <Loading />}
      {send && (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <Loading />
          </div>
          <div className="w-full h-full opacity-70  fixed inset-0 z-40 bg-text-100"></div>
        </div>
      )}
    </div>
  );
};
export default EditUser;
