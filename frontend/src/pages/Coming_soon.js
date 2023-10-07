import React from "react";

const ComingSoon = () => {
  return (
    <div className="bg-gradient-to-r from-[#ffa07b] to-[#f7df8f] min-h-screen flex flex-col justify-center items-center text-white">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Coming Soon...</h1>
        <p className="text-lg md:text-xl text-gray-600">
          We're excited to announce our upcoming event.
        </p>
        <div className="mt-6">
          <p className="text-xl md:text-2xl font-semibold">
            Event Date: September 30, 2023
          </p>
          <p className="text-xl md:text-2xl font-semibold">
            Stay tuned for more details!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
