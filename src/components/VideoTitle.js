import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%]  px-6 md:px-2 absolute bg-gradient-to-r from-black-900">
      <h1 className="font-bold text-white text-2xl md:text-5xl">{title}</h1>
      <p className="hidden md:inline-block py- text-white text-lg w-1/3 ">{overview}</p>
      <div className="my-4 md:m-0 ">
        <button className="py-1 md:px-8 md:p-4 px-2 text-lg hover:bg-opacity-80 rounded-lg bg-white text-black  border-black">
          ▶ Play
        </button>
        <button className="hidden md:inline-block p-4 text-lg hover:bg-opacity-80 rounded-lg opacity-90 ml-4 bg-gray-500 text-white">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
