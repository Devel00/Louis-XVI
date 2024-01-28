import React, { useState } from "react";
import { data } from "../../data/data";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Progress } from "@material-tailwind/react";
import defaultImage from '../../Image/default_problem.jpg'

const PCard = ({ detail }) => {
  const navigate = useNavigate();
  const [Detail, setDetail] = useState(detail);
  const [like, setLike] = useState(detail.likes)
  const HandelLike = async () => {
    try {
      setLike(like + 1)
      const payload = {
        problem_id: detail.id,
        add_like: true,
      };
  
      const response = await fetch(
        'https://biglybigly.iran.liara.run/api/v1/problems/problem-like/',
        {
          method: 'PUT',
          headers: {
              Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(payload),
        }
      ).then(res => res.json());
      console.log('detail: ', detail)
      setLike(response.data.likes)
    }
    catch (e) {
      console.log('error in Pcard: ', e)
      setLike(like - 1)
    }
    
  }

  const goToPath = () => {
    const to = detail.id ? `/ProblemDetail/${detail.id}` : `/`;
    navigate(to);
  }

  return (
      <div className={`w-[85%] h-[450px] bg-bg-200 hover:bg-bg-300/70 rounded-[24px] shadow-xl flex flex-col  justify-center items-center`}>
        <img
          onClick={goToPath}
          className="w-[100%] object-cover h-[70%] object-center rounded-ss-[24px] rounded-se-[24px]"
          src={Detail.main_image ? `https://biglybigly.iran.liara.run/${Detail.main_image}` : defaultImage}
          alt="library"
        />
        <div className="px-6 py-4">
          <div className=" font-main font-bold mb-2">{Detail.title}</div>
          <div className="flex justify-between mt-5 gap-5" >
            <button onClick={HandelLike} className=" bg-bg-100 p-2 gap-5 rounded-lg  flex  items-center justify-between">
              <span className="font-main font-bold">{like}</span>
              <AiOutlineLike className=" text-primary-100" size={40} />
            </button>
            <div className=" bg-bg-100 p-2 gap-4 rounded-lg flex justify-between items-center ">
              <span className="font-main font-bold">
                {detail.funded_amount || 0}
              </span>
              <MdOutlineVolunteerActivism
                className=" text-primary-100"
                size={40}
              />
            </div>
          </div>
          <Progress value={50} />
        </div>
      </div>
  );
};

export default PCard;
