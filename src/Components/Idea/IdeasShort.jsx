import React, { useState, useEffect } from "react";
import ShortVideo from "./ShortVideo";
import Loading from "../Global/Loading";
import Navbar from "../Global/Navbar";
import { Button } from "@material-tailwind/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useParams } from "react-router-dom";
import BlankPage from "./BlankPage";

const Ideas = () => {
  const [ideas, setideas] = useState();
  const [success, setSuccess] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [size, setSize] = useState(0);
  const { id } = useParams();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const newIndex = Math.floor(scrollPosition / 800);
  //     // console.log("scroll psoition: ", scrollPosition);
  //     // console.log("newIdex : ", newIndex);
  //     // console.log("Height : ", window.innerHeight);
  //     if (newIndex !== currentVideoIndex) {
  //       setCurrentVideoIndex(newIndex);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [currentVideoIndex]);

  useEffect(() => {
    const ShowIdeas = async () => {
      try {
        const response = await fetch(
          "https://biglybigly.iran.liara.run/api/v1/idea/idea/"
        );
        let result = await response.json();
        result = result.filter((res) => res.category == id);
        setideas(result);
        // setCurrentVideoIndex(ideas[0].id);
        console.log(result);
        setSuccess(true);
        setSize(result.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
      }
    };
    ShowIdeas();
  }, []);
  // useEffect(() => {
  //   const ShowIdeas = async () => {
  //     if (ideas) {
  //       setCurrentVideoIndex(ideas[0].id);
  //     }
  //   };
  //   ShowIdeas();
  // }, [ideas]);
  const handleScroll = (event) => {
    let scrollPosition = window.scrollY;
    console.log("scrollPosition", scrollPosition);
    console.log("currentVideoIndex", currentVideoIndex);
    if (scrollPosition == 300) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
    if (scrollPosition >= 300) {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // For smooth scrolling
      });
    }

    // Add your code to handle the scroll event here
  };

  return (
    <div className={`w-full h-[1000px]`}>
      <Navbar />
      {size === 0 ? (
        <div className=" flex justify-center items-center w-full h-[60%]">
          <BlankPage />
        </div>
      ) : success ? (
        // <div className=" flex justify-center items-center flex-col">
        //   {ideas.map((video, index) => (
        //     <ShortVideo key={index} video={video} />
        //   ))}
        // </div>
        <div className=" w-full flex justify-start items-start ">
          <div
            onWheel={handleScroll}
            className=" felx justify-center items-center mr-20 w-[80%] h-[1000px] "
          >
            <ShortVideo currentVideoIndex={ideas[currentVideoIndex]} />
          </div>
          <div className=" flex flex-col items-center gap-[400px] justify-center p-12 ">
            {currentVideoIndex == 0 ? (
              <Button
                disabled
                onClick={() => setCurrentVideoIndex(currentVideoIndex - 1)}
                className="rounded-full bg-bg-200 p-4"
              >
                <IoIosArrowUp size={25} />
              </Button>
            ) : (
              <Button
                onClick={() => setCurrentVideoIndex(currentVideoIndex - 1)}
                className="rounded-full bg-bg-200 p-4"
              >
                <IoIosArrowUp size={25} />
              </Button>
            )}
            {currentVideoIndex == size - 1 ? (
              <Button
                disabled
                onClick={() => setCurrentVideoIndex(currentVideoIndex + 1)}
                className=" rounded-full bg-bg-200 p-4"
              >
                <IoIosArrowDown size={25} />
              </Button>
            ) : (
              <Button
                onClick={() => setCurrentVideoIndex(currentVideoIndex + 1)}
                className=" rounded-full bg-bg-200 p-4"
              >
                <IoIosArrowDown size={25} />
              </Button>
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Ideas;
