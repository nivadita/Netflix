import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[20%] px-12 bg-gradient-to-r from-black">
      <h1 className="text-3xl text-white font-bold">{title}</h1>
      <p className="text-lg text-white w-1/3">{overview}</p>
      <div className="pt-3 pb-6">
        <button className="px-4 py-3 rounded-lg bg-white text-black  hover:bg-opacity-80">
          {" "}
          ▶️ Play
        </button>
        <button className="mx-2 px-4 py-3 rounded-lg bg-gray-500 text-white bg-opacity-50">
        ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
