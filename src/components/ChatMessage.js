import React from "react";

const ChatMessage = ({ img, name, comment }) => {
  return (
    <div className="flex m-2">
      <div>
        <img src={img} alt="avatar" className="w-8 h-8 rounded-full"></img>
      </div>
      <p className="font-semibold text-base px-3 dark:text-slate-200">{name}</p>
      <p className="comment-section text-sm dark:text-slate-200">{comment}</p>
    </div>
  );
};

export default ChatMessage;
