import React from "react";

const ShimmerCard = () => {
  return (
    <div className="p-2 m-2  w-[400px] h-72 bg-transparent rounded-lg cursor-pointer">
      <div className=" rounded-lg h-56 bg-gray-400 animate-pulse"></div>
      <div className="m-2 h-4 rounded-md bg-gray-400"></div>
      <div className="m-2 w-1/2 h-3 rounded-md bg-gray-400"></div>
      <div className="m-2 w-1/3 h-3 rounded-md bg-gray-400"></div>
    </div>
  );
};

export default ShimmerCard;
