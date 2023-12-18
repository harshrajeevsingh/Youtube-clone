import React from "react";

const ChatMessage = ({ name, comment }) => {
  return (
    <div className="flex m-2">
      <div>
        <img
          src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Free-Download.png"
          alt="avatar"
          className="w-8 h-8"
        ></img>
      </div>
      <p className="font-bold px-3">{name}</p>
      <p className="comment-section">{comment}</p>
    </div>
  );
};

export default ChatMessage;
