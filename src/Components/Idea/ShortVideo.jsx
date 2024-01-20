import React, { useState } from "react";

const ShortVideo = ({ video, currentVideoIndex }) => {
  // console.log(pos);
  return (
    <div className={`flex  h-full justify-center mr-20`}>
      {/* Your video content goes here */}
      <video
        autoPlay
        controls
        width="400"
        src={video.cover_video}
        title=" "
        frameBorder="80"
        allowFullScreen
        className={` h-[600px] `}
      ></video>
    </div>
  );
};

export default ShortVideo;
