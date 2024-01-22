import { Button } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const ShortVideo = ({ currentVideoIndex }) => {
  // console.log(pos);
  const [success, setSuccess] = useState(false);
  const [idea, setIdea] = useState(currentVideoIndex);
  useEffect(() => {
    const ShowIdeas = async () => {
      // console.log(idea.id);
      setIdea(currentVideoIndex);
    };
    ShowIdeas();
  }, [currentVideoIndex]);

  return (
    // <div className=" relative group h-[600px] z-[1]">
    <div className=" flex justify-center items-center mt-4">
      <div
        className={`relative group z-[1] flex w-[400px]   h-[600px] justify-center mr-20`}
      >
        {/* Your video content goes here */}

        <video
          autoPlay
          controls
          // width="400"
          src={idea.cover_video}
          title=" "
          frameBorder="80"
          // allowFullScreen
          className={` object-cover  h-full w-full `}
        ></video>
        <div className=" w-[100%] h-[90%] group-hover:flex group-hover:duration-700 justify-center items-center absolute text-center z-[5] hidden ">
          <Link
            className=" absolute bottom-[230px] w-[50%]"
            to={`/ideas/${idea.id}`}
          >
            <Button className=" font-main  cursor-pointer hover:scale-105 hover:duration-700 bg-accent-100 text-bg-100  ">
              مشاهده جزئیات
            </Button>
          </Link>
        </div>
      </div>
      {/* // </div> */}
    </div>
  );
};

export default ShortVideo;
