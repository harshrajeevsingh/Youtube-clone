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
    "Thoughts",
    "Podcast",
    "Action",
    "Toys",
    "New stuff",
  ];
  return (
    <div>
      {btnData.map((btn, index) => (
        <button
          key={index}
          className="bg-gray-200 dark:bg-zinc-700 dark:text-white font-normal rounded-lg px-3 py-1 m-2"
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
