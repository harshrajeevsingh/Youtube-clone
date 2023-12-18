import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/ChatSlice";
import { generateName, generateComment } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addChat({
          name: generateName(),
          comment: generateComment(),
        })
      );
    }, 4000);

    return () => {
      clearInterval(i);
    };
  });
  return (
    <div className="h-[520px] flex flex-col-reverse overflow-y-scroll  p-3">
      {chatMessages.map((chat, index) => (
        <ChatMessage name={chat.name} comment={chat.comment} key={index} />
      ))}
    </div>
  );
};

export default LiveChat;
