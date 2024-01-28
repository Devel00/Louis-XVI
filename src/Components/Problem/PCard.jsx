import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import defaultImage from '../../Image/default_problem.jpg'
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

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

  const calculatePrecentage = () => {
    console.log('Detail.funded_amount: ', Detail.funded_amount)
    console.log('Detail.financial_amount: ', Detail.financial_amount)
    console.log('------------------------------------------------------')
    return Detail.funded_amount ? Detail.funded_amount / Detail.financial_amount * 100 : 0
  }


  return (
      <div className={`w-[85%] h-[450px] bg-bg-200 hover:bg-bg-300/70 rounded-[8px] shadow-xl flex flex-col  justify-center items-center`}>
        <img
          onClick={goToPath}
          className="w-[100%] object-cover h-[70%] object-center rounded-[8px]"
          src={Detail.main_image ? `https://biglybigly.iran.liara.run/${Detail.main_image}` : defaultImage}
          alt="library"
        /> 
        <div className="px-6 py-4">
          <div className=" font-main font-bold mb-2">{Detail.title}</div>
          <div className="flex justify-between mt-5 gap-5" >
            <button onClick={HandelLike} className=" bg-bg-100 p-2 gap-5 rounded-[8px]  flex  items-center justify-between">
              <span className="font-main font-bold">{like}</span>
              <AiOutlineLike className=" text-primary-100" size={40} />
            </button>
            <div className=" bg-bg-100 p-2 gap-4 rounded-[8px] flex justify-between items-center ">
              <span className="font-main font-bold">
                {detail.funded_amount || 0}
              </span>
              <MdOutlineVolunteerActivism
                className=" text-primary-100"
                size={40}
              />
            </div>
          </div>
        </div>
        <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" 
              value={calculatePrecentage()} 
              color={calculatePrecentage() > 80 ? 'success' : 'inherit'}
              sx={{
                height: 6, // Adjust the height as needed
                backgroundColor: 'rgba(0, 0, 0, 0.01)', // Background color
                '& .MuiLinearProgress-bar': {
                  backgroundColor: calculatePrecentage() > 80 ? '#4CAF50' : '#E53935', // Progress bar color
                },
              }}
            />
        </Box>
      </div>
  );
};

export default PCard;
