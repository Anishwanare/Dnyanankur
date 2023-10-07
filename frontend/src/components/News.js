import React from "react";

const News = ({ news }) => {
  return (
    <div className="bg-green-500 fixed left-0 top-0 w-full h-10 z-50 overflow-hidden ">
      <div className="flex items-center justify-center h-full bg-green-500 text-xl md:text-2xl font-semibold ">
        <span className="mr-0 md:px-5 flex absolte top-0 left-0 bg-yellow-400 h-full text-sm text-center items-center md:text-xl rounded-e-xl px-0">
          Announcement:
        </span>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-slidein text-white text-sm md:text-lg">{news}</div>
        </div>
      </div>
    </div>
  );
};

export default News;
