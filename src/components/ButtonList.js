import React from "react";

const ButtonList = () => {
  const btnData = [
    "All",
    "Coding",
    "Cooking",
    "Dance",
    "Muisc",
    "Entertainment",
    "Politics",
    "News",
    "Game",
  ];
  return (
    <div>
      {btnData.map((btn) => (
        <button className="bg-gray-200 rounded-lg px-3 py-1 m-2">{btn}</button>
      ))}
    </div>
  );
};

export default ButtonList;
