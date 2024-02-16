import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-64  px-16">
      <h1 className="font-bold text-5xl">{title}</h1>
      <p className="py-2 text-lg w-1/3 ">{overview}</p>
      <div className="py-2">
        <button className="p-4 px-10 text-lg opacity-90 rounded-lg bg-gray-500 text-black  border-black">
          ▶ Play
        </button>
        <button className="p-4 text-lg rounded-lg opacity-90 ml-4 bg-gray-500 text-white">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
