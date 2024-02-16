import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-64  px-16 absolute bg-gradient-to-r from-black-900">
      <h1 className="font-bold text-white text-5xl">{title}</h1>
      <p className="py-2 text-white text-lg w-1/3 ">{overview}</p>
      <div className="py-2 ">
        <button className="p-4 px-10 text-lg hover:bg-opacity-80 rounded-lg bg-white text-black  border-black">
          ▶ Play
        </button>
        <button className="p-4 text-lg hover:bg-opacity-80 rounded-lg opacity-90 ml-4 bg-gray-500 text-white">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
